// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
import * as utilities from "../utilities";

/**
 * Manages a 3rd Generation (v3) App Service Environment.
 *
 * > **NOTE:** App Service Environment V3 is currently in Preview.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleVirtualNetwork = new azure.network.VirtualNetwork("exampleVirtualNetwork", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     addressSpaces: ["10.0.0.0/16"],
 * });
 * const exampleSubnet = new azure.network.Subnet("exampleSubnet", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     virtualNetworkName: exampleVirtualNetwork.name,
 *     addressPrefixes: ["10.0.2.0/24"],
 *     serviceDelegation: [{
 *         name: "Microsoft.Web/hostingEnvironments",
 *         actions: ["Microsoft.Network/virtualNetworks/subnets/action"],
 *     }],
 * });
 * const exampleEnvironmentV3 = new azure.appservice.EnvironmentV3("exampleEnvironmentV3", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     subnetId: exampleSubnet.id,
 *     clusterSettings: [
 *         {
 *             name: "DisableTls1.0",
 *             value: "1",
 *         },
 *         {
 *             name: "InternalEncryption",
 *             value: "true",
 *         },
 *         {
 *             name: "FrontEndSSLCipherSuiteOrder",
 *             value: "TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256",
 *         },
 *     ],
 *     tags: {
 *         env: "production",
 *         terraformed: "true",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * A 3rd Generation (v3) App Service Environment can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:appservice/environmentV3:EnvironmentV3 myAppServiceEnv /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.Web/hostingEnvironments/myAppServiceEnv
 * ```
 */
export class EnvironmentV3 extends pulumi.CustomResource {
    /**
     * Get an existing EnvironmentV3 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EnvironmentV3State, opts?: pulumi.CustomResourceOptions): EnvironmentV3 {
        return new EnvironmentV3(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:appservice/environmentV3:EnvironmentV3';

    /**
     * Returns true if the given object is an instance of EnvironmentV3.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EnvironmentV3 {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EnvironmentV3.__pulumiType;
    }

    /**
     * Should new Private Endpoint Connections be allowed. Defaults to `true`.
     */
    public readonly allowNewPrivateEndpointConnections!: pulumi.Output<boolean | undefined>;
    /**
     * Zero or more `clusterSetting` blocks as defined below.
     */
    public readonly clusterSettings!: pulumi.Output<outputs.appservice.EnvironmentV3ClusterSetting[]>;
    /**
     * This ASEv3 should use dedicated Hosts. Possible vales are `2`. Changing this forces a new resource to be created.
     */
    public readonly dedicatedHostCount!: pulumi.Output<number | undefined>;
    /**
     * the DNS suffix for this App Service Environment V3.
     */
    public /*out*/ readonly dnsSuffix!: pulumi.Output<string>;
    /**
     * The external outbound IP addresses of the App Service Environment V3.
     */
    public /*out*/ readonly externalInboundIpAddresses!: pulumi.Output<string[]>;
    /**
     * An Inbound Network Dependencies block as defined below.
     */
    public /*out*/ readonly inboundNetworkDependencies!: pulumi.Output<outputs.appservice.EnvironmentV3InboundNetworkDependency[]>;
    /**
     * The internal outbound IP addresses of the App Service Environment V3.
     */
    public /*out*/ readonly internalInboundIpAddresses!: pulumi.Output<string[]>;
    /**
     * Specifies which endpoints to serve internally in the Virtual Network for the App Service Environment. Possible values are `None` (for an External VIP Type), and `"Web, Publishing"` (for an Internal VIP Type). Defaults to `None`.
     */
    public readonly internalLoadBalancingMode!: pulumi.Output<string | undefined>;
    /**
     * The number of IP SSL addresses reserved for the App Service Environment V3.
     */
    public /*out*/ readonly ipSslAddressCount!: pulumi.Output<number>;
    /**
     * Outbound addresses of Linux based Apps in this App Service Environment V3
     */
    public /*out*/ readonly linuxOutboundIpAddresses!: pulumi.Output<string[]>;
    /**
     * The location where the App Service Environment exists.
     */
    public /*out*/ readonly location!: pulumi.Output<string>;
    /**
     * The name of the App Service Environment. Changing this forces a new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Pricing tier for the front end instances.
     */
    public /*out*/ readonly pricingTier!: pulumi.Output<string>;
    /**
     * The name of the Resource Group where the App Service Environment exists. Defaults to the Resource Group of the Subnet (specified by `subnetId`).
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * The ID of the Subnet which the App Service Environment should be connected to. Changing this forces a new resource to be created.
     */
    public readonly subnetId!: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource. Changing this forces a new resource to be created.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Outbound addresses of Windows based Apps in this App Service Environment V3.
     */
    public /*out*/ readonly windowsOutboundIpAddresses!: pulumi.Output<string[]>;
    public readonly zoneRedundant!: pulumi.Output<boolean | undefined>;

    /**
     * Create a EnvironmentV3 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EnvironmentV3Args, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: EnvironmentV3Args | EnvironmentV3State, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as EnvironmentV3State | undefined;
            inputs["allowNewPrivateEndpointConnections"] = state ? state.allowNewPrivateEndpointConnections : undefined;
            inputs["clusterSettings"] = state ? state.clusterSettings : undefined;
            inputs["dedicatedHostCount"] = state ? state.dedicatedHostCount : undefined;
            inputs["dnsSuffix"] = state ? state.dnsSuffix : undefined;
            inputs["externalInboundIpAddresses"] = state ? state.externalInboundIpAddresses : undefined;
            inputs["inboundNetworkDependencies"] = state ? state.inboundNetworkDependencies : undefined;
            inputs["internalInboundIpAddresses"] = state ? state.internalInboundIpAddresses : undefined;
            inputs["internalLoadBalancingMode"] = state ? state.internalLoadBalancingMode : undefined;
            inputs["ipSslAddressCount"] = state ? state.ipSslAddressCount : undefined;
            inputs["linuxOutboundIpAddresses"] = state ? state.linuxOutboundIpAddresses : undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["pricingTier"] = state ? state.pricingTier : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["subnetId"] = state ? state.subnetId : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["windowsOutboundIpAddresses"] = state ? state.windowsOutboundIpAddresses : undefined;
            inputs["zoneRedundant"] = state ? state.zoneRedundant : undefined;
        } else {
            const args = argsOrState as EnvironmentV3Args | undefined;
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.subnetId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'subnetId'");
            }
            inputs["allowNewPrivateEndpointConnections"] = args ? args.allowNewPrivateEndpointConnections : undefined;
            inputs["clusterSettings"] = args ? args.clusterSettings : undefined;
            inputs["dedicatedHostCount"] = args ? args.dedicatedHostCount : undefined;
            inputs["internalLoadBalancingMode"] = args ? args.internalLoadBalancingMode : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["subnetId"] = args ? args.subnetId : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["zoneRedundant"] = args ? args.zoneRedundant : undefined;
            inputs["dnsSuffix"] = undefined /*out*/;
            inputs["externalInboundIpAddresses"] = undefined /*out*/;
            inputs["inboundNetworkDependencies"] = undefined /*out*/;
            inputs["internalInboundIpAddresses"] = undefined /*out*/;
            inputs["ipSslAddressCount"] = undefined /*out*/;
            inputs["linuxOutboundIpAddresses"] = undefined /*out*/;
            inputs["location"] = undefined /*out*/;
            inputs["pricingTier"] = undefined /*out*/;
            inputs["windowsOutboundIpAddresses"] = undefined /*out*/;
        }
        if (!opts.version) {
            opts = pulumi.mergeOptions(opts, { version: utilities.getVersion()});
        }
        super(EnvironmentV3.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering EnvironmentV3 resources.
 */
export interface EnvironmentV3State {
    /**
     * Should new Private Endpoint Connections be allowed. Defaults to `true`.
     */
    allowNewPrivateEndpointConnections?: pulumi.Input<boolean>;
    /**
     * Zero or more `clusterSetting` blocks as defined below.
     */
    clusterSettings?: pulumi.Input<pulumi.Input<inputs.appservice.EnvironmentV3ClusterSetting>[]>;
    /**
     * This ASEv3 should use dedicated Hosts. Possible vales are `2`. Changing this forces a new resource to be created.
     */
    dedicatedHostCount?: pulumi.Input<number>;
    /**
     * the DNS suffix for this App Service Environment V3.
     */
    dnsSuffix?: pulumi.Input<string>;
    /**
     * The external outbound IP addresses of the App Service Environment V3.
     */
    externalInboundIpAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * An Inbound Network Dependencies block as defined below.
     */
    inboundNetworkDependencies?: pulumi.Input<pulumi.Input<inputs.appservice.EnvironmentV3InboundNetworkDependency>[]>;
    /**
     * The internal outbound IP addresses of the App Service Environment V3.
     */
    internalInboundIpAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies which endpoints to serve internally in the Virtual Network for the App Service Environment. Possible values are `None` (for an External VIP Type), and `"Web, Publishing"` (for an Internal VIP Type). Defaults to `None`.
     */
    internalLoadBalancingMode?: pulumi.Input<string>;
    /**
     * The number of IP SSL addresses reserved for the App Service Environment V3.
     */
    ipSslAddressCount?: pulumi.Input<number>;
    /**
     * Outbound addresses of Linux based Apps in this App Service Environment V3
     */
    linuxOutboundIpAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The location where the App Service Environment exists.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the App Service Environment. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Pricing tier for the front end instances.
     */
    pricingTier?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the App Service Environment exists. Defaults to the Resource Group of the Subnet (specified by `subnetId`).
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The ID of the Subnet which the App Service Environment should be connected to. Changing this forces a new resource to be created.
     */
    subnetId?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource. Changing this forces a new resource to be created.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Outbound addresses of Windows based Apps in this App Service Environment V3.
     */
    windowsOutboundIpAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    zoneRedundant?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a EnvironmentV3 resource.
 */
export interface EnvironmentV3Args {
    /**
     * Should new Private Endpoint Connections be allowed. Defaults to `true`.
     */
    allowNewPrivateEndpointConnections?: pulumi.Input<boolean>;
    /**
     * Zero or more `clusterSetting` blocks as defined below.
     */
    clusterSettings?: pulumi.Input<pulumi.Input<inputs.appservice.EnvironmentV3ClusterSetting>[]>;
    /**
     * This ASEv3 should use dedicated Hosts. Possible vales are `2`. Changing this forces a new resource to be created.
     */
    dedicatedHostCount?: pulumi.Input<number>;
    /**
     * Specifies which endpoints to serve internally in the Virtual Network for the App Service Environment. Possible values are `None` (for an External VIP Type), and `"Web, Publishing"` (for an Internal VIP Type). Defaults to `None`.
     */
    internalLoadBalancingMode?: pulumi.Input<string>;
    /**
     * The name of the App Service Environment. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the App Service Environment exists. Defaults to the Resource Group of the Subnet (specified by `subnetId`).
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The ID of the Subnet which the App Service Environment should be connected to. Changing this forces a new resource to be created.
     */
    subnetId: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource. Changing this forces a new resource to be created.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    zoneRedundant?: pulumi.Input<boolean>;
}
