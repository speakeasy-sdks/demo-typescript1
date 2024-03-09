/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type Loc = string | number;

export type ValidationError = {
    loc: Array<string | number>;
    msg: string;
    type: string;
};

/** @internal */
export namespace Loc$ {
    export type Inbound = string | number;

    export type Outbound = string | number;

    export const inboundSchema: z.ZodType<Loc, z.ZodTypeDef, Inbound> = z.union([
        z.string(),
        z.number().int(),
    ]);

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Loc> = z.union([
        z.string(),
        z.number().int(),
    ]);
}

/** @internal */
export namespace ValidationError$ {
    export type Inbound = {
        loc: Array<string | number>;
        msg: string;
        type: string;
    };

    export const inboundSchema: z.ZodType<ValidationError, z.ZodTypeDef, Inbound> = z
        .object({
            loc: z.array(z.union([z.string(), z.number().int()])),
            msg: z.string(),
            type: z.string(),
        })
        .transform((v) => {
            return {
                loc: v.loc,
                msg: v.msg,
                type: v.type,
            };
        });

    export type Outbound = {
        loc: Array<string | number>;
        msg: string;
        type: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ValidationError> = z
        .object({
            loc: z.array(z.union([z.string(), z.number().int()])),
            msg: z.string(),
            type: z.string(),
        })
        .transform((v) => {
            return {
                loc: v.loc,
                msg: v.msg,
                type: v.type,
            };
        });
}
