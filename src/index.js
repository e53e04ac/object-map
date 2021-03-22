/*!
 * object-map/src/index.jss
 * e53e04ac <e53e04ac@gmail.com>
 * MIT License
 */

'use strict';

const stream = require('stream');

const { ObjectMap } = (() => {

    /** @typedef ObjectMapConstructorOptions @type {import('../types').ObjectMapConstructorOptions} */
    /** @typedef _ObjectMap @type {import('../types')._ObjectMap} */
    /** @typedef ObjectMap @type {import('../types').ObjectMap} */
    /** @typedef ObjectMapConstructor @type {import('../types').ObjectMapConstructor} */

    /** @type {ObjectMapConstructor}  */
    const ObjectMap = (block, options) => {

        /** @type {ObjectMapConstructorOptions}  */
        const _options = {};
        _options.allowHalfOpen = options?.allowHalfOpen;
        _options.readableHighWaterMark = options?.readableHighWaterMark;
        _options.writableHighWaterMark = options?.writableHighWaterMark;
        _options.writableCorked = options?.writableCorked;

        /** @type {_ObjectMap}  */
        const _it = {};

        /** @type {ObjectMap}  */
        // @ts-ignore
        const it = new stream.Transform({
            allowHalfOpen: _options.allowHalfOpen,
            writableObjectMode: true,
            readableObjectMode: true,
            readableHighWaterMark: _options.readableHighWaterMark,
            writableHighWaterMark: _options.writableHighWaterMark,
            writableCorked: _options.writableCorked,
            transform: async (chunk, encoding, callback) => {
                const output = await block(chunk);
                it.push(output);
                callback();
            }
        });
        it.ObjectMapConstructorOptions = () => {
            return _options;
        };
        it._ObjectMap = () => {
            return _it;
        };
        return it;

    };
    return { ObjectMap };

})();

module.exports = { ObjectMap };
