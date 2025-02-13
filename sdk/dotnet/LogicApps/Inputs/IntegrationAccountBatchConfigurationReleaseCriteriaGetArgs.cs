// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Azure.LogicApps.Inputs
{

    public sealed class IntegrationAccountBatchConfigurationReleaseCriteriaGetArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The batch size in bytes for the Logic App Integration Batch Configuration.
        /// </summary>
        [Input("batchSize")]
        public Input<int>? BatchSize { get; set; }

        /// <summary>
        /// The message count for the Logic App Integration Batch Configuration.
        /// </summary>
        [Input("messageCount")]
        public Input<int>? MessageCount { get; set; }

        /// <summary>
        /// A `recurrence` block as documented below.
        /// </summary>
        [Input("recurrence")]
        public Input<Inputs.IntegrationAccountBatchConfigurationReleaseCriteriaRecurrenceGetArgs>? Recurrence { get; set; }

        public IntegrationAccountBatchConfigurationReleaseCriteriaGetArgs()
        {
        }
    }
}
