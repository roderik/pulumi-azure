// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
import * as utilities from "../utilities";

/**
 * Manages an EventHub Namespace.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleEventHubNamespace = new azure.eventhub.EventHubNamespace("exampleEventHubNamespace", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     sku: "Standard",
 *     capacity: 2,
 *     tags: {
 *         environment: "Production",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * EventHub Namespaces can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:eventhub/eventHubNamespace:EventHubNamespace namespace1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.EventHub/namespaces/namespace1
 * ```
 */
export class EventHubNamespace extends pulumi.CustomResource {
    /**
     * Get an existing EventHubNamespace resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EventHubNamespaceState, opts?: pulumi.CustomResourceOptions): EventHubNamespace {
        return new EventHubNamespace(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:eventhub/eventHubNamespace:EventHubNamespace';

    /**
     * Returns true if the given object is an instance of EventHubNamespace.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EventHubNamespace {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EventHubNamespace.__pulumiType;
    }

    /**
     * Is Auto Inflate enabled for the EventHub Namespace?
     */
    public readonly autoInflateEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * Specifies the Capacity / Throughput Units for a `Standard` SKU namespace. Default capacity has a maximum of `20`, but can be increased in blocks of 20 on a committed purchase basis.
     */
    public readonly capacity!: pulumi.Output<number | undefined>;
    /**
     * Specifies the ID of the EventHub Dedicated Cluster where this Namespace should created. Changing this forces a new resource to be created.
     */
    public readonly dedicatedClusterId!: pulumi.Output<string | undefined>;
    /**
     * The primary connection string for the authorization
     * rule `RootManageSharedAccessKey`.
     */
    public /*out*/ readonly defaultPrimaryConnectionString!: pulumi.Output<string>;
    /**
     * The alias of the primary connection string for the authorization
     * rule `RootManageSharedAccessKey`, which is generated when disaster recovery is enabled.
     */
    public /*out*/ readonly defaultPrimaryConnectionStringAlias!: pulumi.Output<string>;
    /**
     * The primary access key for the authorization rule `RootManageSharedAccessKey`.
     */
    public /*out*/ readonly defaultPrimaryKey!: pulumi.Output<string>;
    /**
     * The secondary connection string for the
     * authorization rule `RootManageSharedAccessKey`.
     */
    public /*out*/ readonly defaultSecondaryConnectionString!: pulumi.Output<string>;
    /**
     * The alias of the secondary connection string for the
     * authorization rule `RootManageSharedAccessKey`, which is generated when disaster recovery is enabled.
     */
    public /*out*/ readonly defaultSecondaryConnectionStringAlias!: pulumi.Output<string>;
    /**
     * The secondary access key for the authorization rule `RootManageSharedAccessKey`.
     */
    public /*out*/ readonly defaultSecondaryKey!: pulumi.Output<string>;
    /**
     * An `identity` block as defined below.
     */
    public readonly identity!: pulumi.Output<outputs.eventhub.EventHubNamespaceIdentity | undefined>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Specifies the maximum number of throughput units when Auto Inflate is Enabled. Valid values range from `1` - `20`.
     */
    public readonly maximumThroughputUnits!: pulumi.Output<number>;
    /**
     * Specifies the name of the EventHub Namespace resource. Changing this forces a new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * A `networkRulesets` block as defined below.
     */
    public readonly networkRulesets!: pulumi.Output<outputs.eventhub.EventHubNamespaceNetworkRulesets>;
    /**
     * The name of the resource group in which to create the namespace. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * Defines which tier to use. Valid options are `Basic`, `Standard`, and `Premium`. Please not that setting this field to `Premium` will force the creation of a new resource and also requires setting `zoneRedundant` to true.
     */
    public readonly sku!: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Specifies if the EventHub Namespace should be Zone Redundant (created across Availability Zones). Changing this forces a new resource to be created. Defaults to `false`.
     */
    public readonly zoneRedundant!: pulumi.Output<boolean | undefined>;

    /**
     * Create a EventHubNamespace resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EventHubNamespaceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: EventHubNamespaceArgs | EventHubNamespaceState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as EventHubNamespaceState | undefined;
            inputs["autoInflateEnabled"] = state ? state.autoInflateEnabled : undefined;
            inputs["capacity"] = state ? state.capacity : undefined;
            inputs["dedicatedClusterId"] = state ? state.dedicatedClusterId : undefined;
            inputs["defaultPrimaryConnectionString"] = state ? state.defaultPrimaryConnectionString : undefined;
            inputs["defaultPrimaryConnectionStringAlias"] = state ? state.defaultPrimaryConnectionStringAlias : undefined;
            inputs["defaultPrimaryKey"] = state ? state.defaultPrimaryKey : undefined;
            inputs["defaultSecondaryConnectionString"] = state ? state.defaultSecondaryConnectionString : undefined;
            inputs["defaultSecondaryConnectionStringAlias"] = state ? state.defaultSecondaryConnectionStringAlias : undefined;
            inputs["defaultSecondaryKey"] = state ? state.defaultSecondaryKey : undefined;
            inputs["identity"] = state ? state.identity : undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["maximumThroughputUnits"] = state ? state.maximumThroughputUnits : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["networkRulesets"] = state ? state.networkRulesets : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["sku"] = state ? state.sku : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["zoneRedundant"] = state ? state.zoneRedundant : undefined;
        } else {
            const args = argsOrState as EventHubNamespaceArgs | undefined;
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sku === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sku'");
            }
            inputs["autoInflateEnabled"] = args ? args.autoInflateEnabled : undefined;
            inputs["capacity"] = args ? args.capacity : undefined;
            inputs["dedicatedClusterId"] = args ? args.dedicatedClusterId : undefined;
            inputs["identity"] = args ? args.identity : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["maximumThroughputUnits"] = args ? args.maximumThroughputUnits : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["networkRulesets"] = args ? args.networkRulesets : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["sku"] = args ? args.sku : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["zoneRedundant"] = args ? args.zoneRedundant : undefined;
            inputs["defaultPrimaryConnectionString"] = undefined /*out*/;
            inputs["defaultPrimaryConnectionStringAlias"] = undefined /*out*/;
            inputs["defaultPrimaryKey"] = undefined /*out*/;
            inputs["defaultSecondaryConnectionString"] = undefined /*out*/;
            inputs["defaultSecondaryConnectionStringAlias"] = undefined /*out*/;
            inputs["defaultSecondaryKey"] = undefined /*out*/;
        }
        if (!opts.version) {
            opts = pulumi.mergeOptions(opts, { version: utilities.getVersion()});
        }
        super(EventHubNamespace.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering EventHubNamespace resources.
 */
export interface EventHubNamespaceState {
    /**
     * Is Auto Inflate enabled for the EventHub Namespace?
     */
    autoInflateEnabled?: pulumi.Input<boolean>;
    /**
     * Specifies the Capacity / Throughput Units for a `Standard` SKU namespace. Default capacity has a maximum of `20`, but can be increased in blocks of 20 on a committed purchase basis.
     */
    capacity?: pulumi.Input<number>;
    /**
     * Specifies the ID of the EventHub Dedicated Cluster where this Namespace should created. Changing this forces a new resource to be created.
     */
    dedicatedClusterId?: pulumi.Input<string>;
    /**
     * The primary connection string for the authorization
     * rule `RootManageSharedAccessKey`.
     */
    defaultPrimaryConnectionString?: pulumi.Input<string>;
    /**
     * The alias of the primary connection string for the authorization
     * rule `RootManageSharedAccessKey`, which is generated when disaster recovery is enabled.
     */
    defaultPrimaryConnectionStringAlias?: pulumi.Input<string>;
    /**
     * The primary access key for the authorization rule `RootManageSharedAccessKey`.
     */
    defaultPrimaryKey?: pulumi.Input<string>;
    /**
     * The secondary connection string for the
     * authorization rule `RootManageSharedAccessKey`.
     */
    defaultSecondaryConnectionString?: pulumi.Input<string>;
    /**
     * The alias of the secondary connection string for the
     * authorization rule `RootManageSharedAccessKey`, which is generated when disaster recovery is enabled.
     */
    defaultSecondaryConnectionStringAlias?: pulumi.Input<string>;
    /**
     * The secondary access key for the authorization rule `RootManageSharedAccessKey`.
     */
    defaultSecondaryKey?: pulumi.Input<string>;
    /**
     * An `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.eventhub.EventHubNamespaceIdentity>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the maximum number of throughput units when Auto Inflate is Enabled. Valid values range from `1` - `20`.
     */
    maximumThroughputUnits?: pulumi.Input<number>;
    /**
     * Specifies the name of the EventHub Namespace resource. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A `networkRulesets` block as defined below.
     */
    networkRulesets?: pulumi.Input<inputs.eventhub.EventHubNamespaceNetworkRulesets>;
    /**
     * The name of the resource group in which to create the namespace. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * Defines which tier to use. Valid options are `Basic`, `Standard`, and `Premium`. Please not that setting this field to `Premium` will force the creation of a new resource and also requires setting `zoneRedundant` to true.
     */
    sku?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Specifies if the EventHub Namespace should be Zone Redundant (created across Availability Zones). Changing this forces a new resource to be created. Defaults to `false`.
     */
    zoneRedundant?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a EventHubNamespace resource.
 */
export interface EventHubNamespaceArgs {
    /**
     * Is Auto Inflate enabled for the EventHub Namespace?
     */
    autoInflateEnabled?: pulumi.Input<boolean>;
    /**
     * Specifies the Capacity / Throughput Units for a `Standard` SKU namespace. Default capacity has a maximum of `20`, but can be increased in blocks of 20 on a committed purchase basis.
     */
    capacity?: pulumi.Input<number>;
    /**
     * Specifies the ID of the EventHub Dedicated Cluster where this Namespace should created. Changing this forces a new resource to be created.
     */
    dedicatedClusterId?: pulumi.Input<string>;
    /**
     * An `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.eventhub.EventHubNamespaceIdentity>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the maximum number of throughput units when Auto Inflate is Enabled. Valid values range from `1` - `20`.
     */
    maximumThroughputUnits?: pulumi.Input<number>;
    /**
     * Specifies the name of the EventHub Namespace resource. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A `networkRulesets` block as defined below.
     */
    networkRulesets?: pulumi.Input<inputs.eventhub.EventHubNamespaceNetworkRulesets>;
    /**
     * The name of the resource group in which to create the namespace. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Defines which tier to use. Valid options are `Basic`, `Standard`, and `Premium`. Please not that setting this field to `Premium` will force the creation of a new resource and also requires setting `zoneRedundant` to true.
     */
    sku: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Specifies if the EventHub Namespace should be Zone Redundant (created across Availability Zones). Changing this forces a new resource to be created. Defaults to `false`.
     */
    zoneRedundant?: pulumi.Input<boolean>;
}
