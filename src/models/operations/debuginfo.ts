/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type DebugInfoResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Successful Response
     */
    any?: any | undefined;
};

/** @internal */
export namespace DebugInfoResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        any?: any | undefined;
    };

    export const inboundSchema: z.ZodType<DebugInfoResponse, z.ZodTypeDef, Inbound> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            any: z.any().optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.any === undefined ? null : { any: v.any }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        any?: any | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DebugInfoResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            any: z.any().optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.any === undefined ? null : { any: v.any }),
            };
        });
}
