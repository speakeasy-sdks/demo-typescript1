/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type RunPerf = {
    metricsTimeSec: Record<string, number>;
    workflowTotalSec: number;
    metricsTotalSec: number;
    validationTotalSec: number;
};

/** @internal */
export namespace RunPerf$ {
    export type Inbound = {
        metrics_time_sec: Record<string, number>;
        workflow_total_sec: number;
        metrics_total_sec: number;
        validation_total_sec: number;
    };

    export const inboundSchema: z.ZodType<RunPerf, z.ZodTypeDef, Inbound> = z
        .object({
            metrics_time_sec: z.record(z.number()),
            workflow_total_sec: z.number(),
            metrics_total_sec: z.number(),
            validation_total_sec: z.number(),
        })
        .transform((v) => {
            return {
                metricsTimeSec: v.metrics_time_sec,
                workflowTotalSec: v.workflow_total_sec,
                metricsTotalSec: v.metrics_total_sec,
                validationTotalSec: v.validation_total_sec,
            };
        });

    export type Outbound = {
        metrics_time_sec: Record<string, number>;
        workflow_total_sec: number;
        metrics_total_sec: number;
        validation_total_sec: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RunPerf> = z
        .object({
            metricsTimeSec: z.record(z.number()),
            workflowTotalSec: z.number(),
            metricsTotalSec: z.number(),
            validationTotalSec: z.number(),
        })
        .transform((v) => {
            return {
                metrics_time_sec: v.metricsTimeSec,
                workflow_total_sec: v.workflowTotalSec,
                metrics_total_sec: v.metricsTotalSec,
                validation_total_sec: v.validationTotalSec,
            };
        });
}
