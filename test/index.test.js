/*!
 * object-map/test/index.test.js
 * e53e04ac <e53e04ac@gmail.com>
 * MIT License
 */

'use strict';

const stream = require('stream');

const chai = require('chai');

describe('index.js', async () => {

    const { ObjectMap } = require('../');

    it('coverage', async () => {

        const objectMap = ObjectMap({
            callback: async (input) => {
                return input * 2;
            }
        });
        objectMap.ObjectMapConstructorOptions();
        objectMap._ObjectMap();

        const input = new stream.Readable({
            objectMode: true,
            read: (size) => {
                input.push(1);
                input.push(null);
            }
        });

        const output = new stream.Writable({
            objectMode: true,
            write: (chunk, encoding, callback) => {
                callback();
            }
        });

        await new Promise((resolve, reject) => {
            stream.pipeline([
                input,
                objectMap,
                output
            ], (error) => {
                if (error != null) {
                    reject(error);
                } else {
                    resolve();
                }
            });
        });

    });

});
