// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
import * as utilities from "../utilities";

/**
 * Manages an Azure Data Lake Store.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleStore = new azure.datalake.Store("exampleStore", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     encryptionState: "Enabled",
 *     encryptionType: "ServiceManaged",
 * });
 * ```
 *
 * ## Import
 *
 * Data Lake Store's can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:datalake/store:Store example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.DataLakeStore/accounts/mydatalakeaccount
 * ```
 */
export class Store extends pulumi.CustomResource {
    /**
     * Get an existing Store resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: StoreState, opts?: pulumi.CustomResourceOptions): Store {
        return new Store(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:datalake/store:Store';

    /**
     * Returns true if the given object is an instance of Store.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Store {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Store.__pulumiType;
    }

    /**
     * Is Encryption enabled on this Data Lake Store Account? Possible values are `Enabled` or `Disabled`. Defaults to `Enabled`.
     */
    public readonly encryptionState!: pulumi.Output<string | undefined>;
    /**
     * The Encryption Type used for this Data Lake Store Account. Currently can be set to `ServiceManaged` when `encryptionState` is `Enabled` - and must be a blank string when it's Disabled.
     */
    public readonly encryptionType!: pulumi.Output<string>;
    /**
     * The Endpoint for the Data Lake Store.
     */
    public /*out*/ readonly endpoint!: pulumi.Output<string>;
    /**
     * are Azure Service IP's allowed through the firewall? Possible values are `Enabled` and `Disabled`. Defaults to `Enabled.`
     */
    public readonly firewallAllowAzureIps!: pulumi.Output<string | undefined>;
    /**
     * the state of the Firewall. Possible values are `Enabled` and `Disabled`. Defaults to `Enabled.`
     */
    public readonly firewallState!: pulumi.Output<string | undefined>;
    /**
     * An `identity` block defined below.
     */
    public readonly identity!: pulumi.Output<outputs.datalake.StoreIdentity | undefined>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Specifies the name of the Data Lake Store. Changing this forces a new resource to be created. Has to be between 3 to 24 characters.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The name of the resource group in which to create the Data Lake Store.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The monthly commitment tier for Data Lake Store. Accepted values are `Consumption`, `Commitment_1TB`, `Commitment_10TB`, `Commitment_100TB`, `Commitment_500TB`, `Commitment_1PB` or `Commitment_5PB`.
     */
    public readonly tier!: pulumi.Output<string | undefined>;

    /**
     * Create a Store resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StoreArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: StoreArgs | StoreState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as StoreState | undefined;
            inputs["encryptionState"] = state ? state.encryptionState : undefined;
            inputs["encryptionType"] = state ? state.encryptionType : undefined;
            inputs["endpoint"] = state ? state.endpoint : undefined;
            inputs["firewallAllowAzureIps"] = state ? state.firewallAllowAzureIps : undefined;
            inputs["firewallState"] = state ? state.firewallState : undefined;
            inputs["identity"] = state ? state.identity : undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["tier"] = state ? state.tier : undefined;
        } else {
            const args = argsOrState as StoreArgs | undefined;
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["encryptionState"] = args ? args.encryptionState : undefined;
            inputs["encryptionType"] = args ? args.encryptionType : undefined;
            inputs["firewallAllowAzureIps"] = args ? args.firewallAllowAzureIps : undefined;
            inputs["firewallState"] = args ? args.firewallState : undefined;
            inputs["identity"] = args ? args.identity : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["tier"] = args ? args.tier : undefined;
            inputs["endpoint"] = undefined /*out*/;
        }
        if (!opts.version) {
            opts = pulumi.mergeOptions(opts, { version: utilities.getVersion()});
        }
        super(Store.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Store resources.
 */
export interface StoreState {
    /**
     * Is Encryption enabled on this Data Lake Store Account? Possible values are `Enabled` or `Disabled`. Defaults to `Enabled`.
     */
    encryptionState?: pulumi.Input<string>;
    /**
     * The Encryption Type used for this Data Lake Store Account. Currently can be set to `ServiceManaged` when `encryptionState` is `Enabled` - and must be a blank string when it's Disabled.
     */
    encryptionType?: pulumi.Input<string>;
    /**
     * The Endpoint for the Data Lake Store.
     */
    endpoint?: pulumi.Input<string>;
    /**
     * are Azure Service IP's allowed through the firewall? Possible values are `Enabled` and `Disabled`. Defaults to `Enabled.`
     */
    firewallAllowAzureIps?: pulumi.Input<string>;
    /**
     * the state of the Firewall. Possible values are `Enabled` and `Disabled`. Defaults to `Enabled.`
     */
    firewallState?: pulumi.Input<string>;
    /**
     * An `identity` block defined below.
     */
    identity?: pulumi.Input<inputs.datalake.StoreIdentity>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Data Lake Store. Changing this forces a new resource to be created. Has to be between 3 to 24 characters.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Data Lake Store.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The monthly commitment tier for Data Lake Store. Accepted values are `Consumption`, `Commitment_1TB`, `Commitment_10TB`, `Commitment_100TB`, `Commitment_500TB`, `Commitment_1PB` or `Commitment_5PB`.
     */
    tier?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Store resource.
 */
export interface StoreArgs {
    /**
     * Is Encryption enabled on this Data Lake Store Account? Possible values are `Enabled` or `Disabled`. Defaults to `Enabled`.
     */
    encryptionState?: pulumi.Input<string>;
    /**
     * The Encryption Type used for this Data Lake Store Account. Currently can be set to `ServiceManaged` when `encryptionState` is `Enabled` - and must be a blank string when it's Disabled.
     */
    encryptionType?: pulumi.Input<string>;
    /**
     * are Azure Service IP's allowed through the firewall? Possible values are `Enabled` and `Disabled`. Defaults to `Enabled.`
     */
    firewallAllowAzureIps?: pulumi.Input<string>;
    /**
     * the state of the Firewall. Possible values are `Enabled` and `Disabled`. Defaults to `Enabled.`
     */
    firewallState?: pulumi.Input<string>;
    /**
     * An `identity` block defined below.
     */
    identity?: pulumi.Input<inputs.datalake.StoreIdentity>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Data Lake Store. Changing this forces a new resource to be created. Has to be between 3 to 24 characters.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Data Lake Store.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The monthly commitment tier for Data Lake Store. Accepted values are `Consumption`, `Commitment_1TB`, `Commitment_10TB`, `Commitment_100TB`, `Commitment_500TB`, `Commitment_1PB` or `Commitment_5PB`.
     */
    tier?: pulumi.Input<string>;
}
