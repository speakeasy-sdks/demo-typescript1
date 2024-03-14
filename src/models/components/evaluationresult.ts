/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as errors from "../../models/errors";
import { RunPerf, RunPerf$ } from "./runperf";
import * as z from "zod";

export type Metrics = {};

export type EvaluationResult = {
    metrics: Array<Metrics>;
    validationResults: errors.ValidationResult;
    perfInfo: RunPerf | null;
};

/** @internal */
export namespace Metrics$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<Metrics, z.ZodTypeDef, Inbound> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Metrics> = z.object({});
}

/** @internal */
export namespace EvaluationResult$ {
    export type Inbound = {
        metrics: Array<Metrics$.Inbound>;
        validation_results: errors.ValidationResult$.Inbound;
        perf_info: RunPerf$.Inbound | null;
    };

    export const inboundSchema: z.ZodType<EvaluationResult, z.ZodTypeDef, Inbound> = z
        .object({
            metrics: z.array(z.lazy(() => Metrics$.inboundSchema)),
            validation_results: errors.ValidationResult$.inboundSchema,
            perf_info: z.nullable(RunPerf$.inboundSchema),
        })
        .transform((v) => {
            return {
                metrics: v.metrics,
                validationResults: v.validation_results,
                perfInfo: v.perf_info,
            };
        });

    export type Outbound = {
        metrics: Array<Metrics$.Outbound>;
        validation_results: errors.ValidationResult$.Outbound;
        perf_info: RunPerf$.Outbound | null;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, EvaluationResult> = z
        .object({
            metrics: z.array(z.lazy(() => Metrics$.outboundSchema)),
            validationResults: errors.ValidationResult$.outboundSchema,
            perfInfo: z.nullable(RunPerf$.outboundSchema),
        })
        .transform((v) => {
            return {
                metrics: v.metrics,
                validation_results: v.validationResults,
                perf_info: v.perfInfo,
            };
        });
}
