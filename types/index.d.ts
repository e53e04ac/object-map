/*!
 * object-map/types/index.d.ts
 * e53e04ac <e53e04ac@gmail.com>
 * MIT License
 */

import stream from 'stream';

type ObjectMapConstructorOptions = {
    allowHalfOpen?: boolean
    readableHighWaterMark?: number;
    writableHighWaterMark?: number;
    writableCorked?: number;
    callback: {
        (input: any): Promise<any>;
    };
};

type _ObjectMap = {

};

type ObjectMap = stream.Transform & {
    ObjectMapConstructorOptions: {
        (): ObjectMapConstructorOptions;
    };
    _ObjectMap: {
        (): _ObjectMap;
    };
};

type ObjectMapConstructor = {
    (options: ObjectMapConstructorOptions): ObjectMap;
};

export const ObjectMap: ObjectMapConstructor;
