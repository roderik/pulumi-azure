// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
import * as utilities from "../utilities";

/**
 * Manages an Application Gateway.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleVirtualNetwork = new azure.network.VirtualNetwork("exampleVirtualNetwork", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     addressSpaces: ["10.254.0.0/16"],
 * });
 * const frontend = new azure.network.Subnet("frontend", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     virtualNetworkName: exampleVirtualNetwork.name,
 *     addressPrefixes: ["10.254.0.0/24"],
 * });
 * const backend = new azure.network.Subnet("backend", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     virtualNetworkName: exampleVirtualNetwork.name,
 *     addressPrefixes: ["10.254.2.0/24"],
 * });
 * const examplePublicIp = new azure.network.PublicIp("examplePublicIp", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     allocationMethod: "Dynamic",
 * });
 * const backendAddressPoolName = pulumi.interpolate`${exampleVirtualNetwork.name}-beap`;
 * const frontendPortName = pulumi.interpolate`${exampleVirtualNetwork.name}-feport`;
 * const frontendIpConfigurationName = pulumi.interpolate`${exampleVirtualNetwork.name}-feip`;
 * const httpSettingName = pulumi.interpolate`${exampleVirtualNetwork.name}-be-htst`;
 * const listenerName = pulumi.interpolate`${exampleVirtualNetwork.name}-httplstn`;
 * const requestRoutingRuleName = pulumi.interpolate`${exampleVirtualNetwork.name}-rqrt`;
 * const redirectConfigurationName = pulumi.interpolate`${exampleVirtualNetwork.name}-rdrcfg`;
 * const network = new azure.network.ApplicationGateway("network", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     sku: {
 *         name: "Standard_Small",
 *         tier: "Standard",
 *         capacity: 2,
 *     },
 *     gatewayIpConfigurations: [{
 *         name: "my-gateway-ip-configuration",
 *         subnetId: frontend.id,
 *     }],
 *     frontendPorts: [{
 *         name: frontendPortName,
 *         port: 80,
 *     }],
 *     frontendIpConfigurations: [{
 *         name: frontendIpConfigurationName,
 *         publicIpAddressId: examplePublicIp.id,
 *     }],
 *     backendAddressPools: [{
 *         name: backendAddressPoolName,
 *     }],
 *     backendHttpSettings: [{
 *         name: httpSettingName,
 *         cookieBasedAffinity: "Disabled",
 *         path: "/path1/",
 *         port: 80,
 *         protocol: "Http",
 *         requestTimeout: 60,
 *     }],
 *     httpListeners: [{
 *         name: listenerName,
 *         frontendIpConfigurationName: frontendIpConfigurationName,
 *         frontendPortName: frontendPortName,
 *         protocol: "Http",
 *     }],
 *     requestRoutingRules: [{
 *         name: requestRoutingRuleName,
 *         ruleType: "Basic",
 *         httpListenerName: listenerName,
 *         backendAddressPoolName: backendAddressPoolName,
 *         backendHttpSettingsName: httpSettingName,
 *     }],
 * });
 * ```
 *
 * ## Import
 *
 * Application Gateway's can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:network/applicationGateway:ApplicationGateway example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Network/applicationGateways/myGateway1
 * ```
 */
export class ApplicationGateway extends pulumi.CustomResource {
    /**
     * Get an existing ApplicationGateway resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ApplicationGatewayState, opts?: pulumi.CustomResourceOptions): ApplicationGateway {
        return new ApplicationGateway(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:network/applicationGateway:ApplicationGateway';

    /**
     * Returns true if the given object is an instance of ApplicationGateway.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ApplicationGateway {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ApplicationGateway.__pulumiType;
    }

    /**
     * One or more `authenticationCertificate` blocks as defined below.
     */
    public readonly authenticationCertificates!: pulumi.Output<outputs.network.ApplicationGatewayAuthenticationCertificate[] | undefined>;
    /**
     * A `autoscaleConfiguration` block as defined below.
     */
    public readonly autoscaleConfiguration!: pulumi.Output<outputs.network.ApplicationGatewayAutoscaleConfiguration | undefined>;
    /**
     * One or more `backendAddressPool` blocks as defined below.
     */
    public readonly backendAddressPools!: pulumi.Output<outputs.network.ApplicationGatewayBackendAddressPool[]>;
    /**
     * One or more `backendHttpSettings` blocks as defined below.
     */
    public readonly backendHttpSettings!: pulumi.Output<outputs.network.ApplicationGatewayBackendHttpSetting[]>;
    /**
     * One or more `customErrorConfiguration` blocks as defined below.
     */
    public readonly customErrorConfigurations!: pulumi.Output<outputs.network.ApplicationGatewayCustomErrorConfiguration[] | undefined>;
    /**
     * Is HTTP2 enabled on the application gateway resource? Defaults to `false`.
     */
    public readonly enableHttp2!: pulumi.Output<boolean | undefined>;
    /**
     * The ID of the Web Application Firewall Policy.
     */
    public readonly firewallPolicyId!: pulumi.Output<string | undefined>;
    /**
     * One or more `frontendIpConfiguration` blocks as defined below.
     */
    public readonly frontendIpConfigurations!: pulumi.Output<outputs.network.ApplicationGatewayFrontendIpConfiguration[]>;
    /**
     * One or more `frontendPort` blocks as defined below.
     */
    public readonly frontendPorts!: pulumi.Output<outputs.network.ApplicationGatewayFrontendPort[]>;
    /**
     * One or more `gatewayIpConfiguration` blocks as defined below.
     */
    public readonly gatewayIpConfigurations!: pulumi.Output<outputs.network.ApplicationGatewayGatewayIpConfiguration[]>;
    /**
     * One or more `httpListener` blocks as defined below.
     */
    public readonly httpListeners!: pulumi.Output<outputs.network.ApplicationGatewayHttpListener[]>;
    /**
     * A `identity` block.
     */
    public readonly identity!: pulumi.Output<outputs.network.ApplicationGatewayIdentity | undefined>;
    /**
     * The Azure region where the Application Gateway should exist. Changing this forces a new resource to be created.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the Application Gateway. Changing this forces a new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * One or more `probe` blocks as defined below.
     */
    public readonly probes!: pulumi.Output<outputs.network.ApplicationGatewayProbe[] | undefined>;
    /**
     * A `redirectConfiguration` block as defined below.
     */
    public readonly redirectConfigurations!: pulumi.Output<outputs.network.ApplicationGatewayRedirectConfiguration[] | undefined>;
    /**
     * One or more `requestRoutingRule` blocks as defined below.
     */
    public readonly requestRoutingRules!: pulumi.Output<outputs.network.ApplicationGatewayRequestRoutingRule[]>;
    /**
     * The name of the resource group in which to the Application Gateway should exist. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * One or more `rewriteRuleSet` blocks as defined below. Only valid for v2 SKUs.
     */
    public readonly rewriteRuleSets!: pulumi.Output<outputs.network.ApplicationGatewayRewriteRuleSet[] | undefined>;
    /**
     * A `sku` block as defined below.
     */
    public readonly sku!: pulumi.Output<outputs.network.ApplicationGatewaySku>;
    /**
     * One or more `sslCertificate` blocks as defined below.
     */
    public readonly sslCertificates!: pulumi.Output<outputs.network.ApplicationGatewaySslCertificate[] | undefined>;
    /**
     * a `ssl policy` block as defined below.
     */
    public readonly sslPolicies!: pulumi.Output<outputs.network.ApplicationGatewaySslPolicy[]>;
    /**
     * One or more `sslProfile` blocks as defined below.
     */
    public readonly sslProfiles!: pulumi.Output<outputs.network.ApplicationGatewaySslProfile[] | undefined>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * One or more `trustedClientCertificate` blocks as defined below.
     */
    public readonly trustedClientCertificates!: pulumi.Output<outputs.network.ApplicationGatewayTrustedClientCertificate[] | undefined>;
    /**
     * One or more `trustedRootCertificate` blocks as defined below.
     */
    public readonly trustedRootCertificates!: pulumi.Output<outputs.network.ApplicationGatewayTrustedRootCertificate[] | undefined>;
    /**
     * One or more `urlPathMap` blocks as defined below.
     */
    public readonly urlPathMaps!: pulumi.Output<outputs.network.ApplicationGatewayUrlPathMap[] | undefined>;
    /**
     * A `wafConfiguration` block as defined below.
     */
    public readonly wafConfiguration!: pulumi.Output<outputs.network.ApplicationGatewayWafConfiguration | undefined>;
    /**
     * A collection of availability zones to spread the Application Gateway over.
     */
    public readonly zones!: pulumi.Output<string[] | undefined>;

    /**
     * Create a ApplicationGateway resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApplicationGatewayArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ApplicationGatewayArgs | ApplicationGatewayState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ApplicationGatewayState | undefined;
            inputs["authenticationCertificates"] = state ? state.authenticationCertificates : undefined;
            inputs["autoscaleConfiguration"] = state ? state.autoscaleConfiguration : undefined;
            inputs["backendAddressPools"] = state ? state.backendAddressPools : undefined;
            inputs["backendHttpSettings"] = state ? state.backendHttpSettings : undefined;
            inputs["customErrorConfigurations"] = state ? state.customErrorConfigurations : undefined;
            inputs["enableHttp2"] = state ? state.enableHttp2 : undefined;
            inputs["firewallPolicyId"] = state ? state.firewallPolicyId : undefined;
            inputs["frontendIpConfigurations"] = state ? state.frontendIpConfigurations : undefined;
            inputs["frontendPorts"] = state ? state.frontendPorts : undefined;
            inputs["gatewayIpConfigurations"] = state ? state.gatewayIpConfigurations : undefined;
            inputs["httpListeners"] = state ? state.httpListeners : undefined;
            inputs["identity"] = state ? state.identity : undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["probes"] = state ? state.probes : undefined;
            inputs["redirectConfigurations"] = state ? state.redirectConfigurations : undefined;
            inputs["requestRoutingRules"] = state ? state.requestRoutingRules : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["rewriteRuleSets"] = state ? state.rewriteRuleSets : undefined;
            inputs["sku"] = state ? state.sku : undefined;
            inputs["sslCertificates"] = state ? state.sslCertificates : undefined;
            inputs["sslPolicies"] = state ? state.sslPolicies : undefined;
            inputs["sslProfiles"] = state ? state.sslProfiles : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["trustedClientCertificates"] = state ? state.trustedClientCertificates : undefined;
            inputs["trustedRootCertificates"] = state ? state.trustedRootCertificates : undefined;
            inputs["urlPathMaps"] = state ? state.urlPathMaps : undefined;
            inputs["wafConfiguration"] = state ? state.wafConfiguration : undefined;
            inputs["zones"] = state ? state.zones : undefined;
        } else {
            const args = argsOrState as ApplicationGatewayArgs | undefined;
            if ((!args || args.backendAddressPools === undefined) && !opts.urn) {
                throw new Error("Missing required property 'backendAddressPools'");
            }
            if ((!args || args.backendHttpSettings === undefined) && !opts.urn) {
                throw new Error("Missing required property 'backendHttpSettings'");
            }
            if ((!args || args.frontendIpConfigurations === undefined) && !opts.urn) {
                throw new Error("Missing required property 'frontendIpConfigurations'");
            }
            if ((!args || args.frontendPorts === undefined) && !opts.urn) {
                throw new Error("Missing required property 'frontendPorts'");
            }
            if ((!args || args.gatewayIpConfigurations === undefined) && !opts.urn) {
                throw new Error("Missing required property 'gatewayIpConfigurations'");
            }
            if ((!args || args.httpListeners === undefined) && !opts.urn) {
                throw new Error("Missing required property 'httpListeners'");
            }
            if ((!args || args.requestRoutingRules === undefined) && !opts.urn) {
                throw new Error("Missing required property 'requestRoutingRules'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sku === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sku'");
            }
            inputs["authenticationCertificates"] = args ? args.authenticationCertificates : undefined;
            inputs["autoscaleConfiguration"] = args ? args.autoscaleConfiguration : undefined;
            inputs["backendAddressPools"] = args ? args.backendAddressPools : undefined;
            inputs["backendHttpSettings"] = args ? args.backendHttpSettings : undefined;
            inputs["customErrorConfigurations"] = args ? args.customErrorConfigurations : undefined;
            inputs["enableHttp2"] = args ? args.enableHttp2 : undefined;
            inputs["firewallPolicyId"] = args ? args.firewallPolicyId : undefined;
            inputs["frontendIpConfigurations"] = args ? args.frontendIpConfigurations : undefined;
            inputs["frontendPorts"] = args ? args.frontendPorts : undefined;
            inputs["gatewayIpConfigurations"] = args ? args.gatewayIpConfigurations : undefined;
            inputs["httpListeners"] = args ? args.httpListeners : undefined;
            inputs["identity"] = args ? args.identity : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["probes"] = args ? args.probes : undefined;
            inputs["redirectConfigurations"] = args ? args.redirectConfigurations : undefined;
            inputs["requestRoutingRules"] = args ? args.requestRoutingRules : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["rewriteRuleSets"] = args ? args.rewriteRuleSets : undefined;
            inputs["sku"] = args ? args.sku : undefined;
            inputs["sslCertificates"] = args ? args.sslCertificates : undefined;
            inputs["sslPolicies"] = args ? args.sslPolicies : undefined;
            inputs["sslProfiles"] = args ? args.sslProfiles : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["trustedClientCertificates"] = args ? args.trustedClientCertificates : undefined;
            inputs["trustedRootCertificates"] = args ? args.trustedRootCertificates : undefined;
            inputs["urlPathMaps"] = args ? args.urlPathMaps : undefined;
            inputs["wafConfiguration"] = args ? args.wafConfiguration : undefined;
            inputs["zones"] = args ? args.zones : undefined;
        }
        if (!opts.version) {
            opts = pulumi.mergeOptions(opts, { version: utilities.getVersion()});
        }
        super(ApplicationGateway.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ApplicationGateway resources.
 */
export interface ApplicationGatewayState {
    /**
     * One or more `authenticationCertificate` blocks as defined below.
     */
    authenticationCertificates?: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewayAuthenticationCertificate>[]>;
    /**
     * A `autoscaleConfiguration` block as defined below.
     */
    autoscaleConfiguration?: pulumi.Input<inputs.network.ApplicationGatewayAutoscaleConfiguration>;
    /**
     * One or more `backendAddressPool` blocks as defined below.
     */
    backendAddressPools?: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewayBackendAddressPool>[]>;
    /**
     * One or more `backendHttpSettings` blocks as defined below.
     */
    backendHttpSettings?: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewayBackendHttpSetting>[]>;
    /**
     * One or more `customErrorConfiguration` blocks as defined below.
     */
    customErrorConfigurations?: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewayCustomErrorConfiguration>[]>;
    /**
     * Is HTTP2 enabled on the application gateway resource? Defaults to `false`.
     */
    enableHttp2?: pulumi.Input<boolean>;
    /**
     * The ID of the Web Application Firewall Policy.
     */
    firewallPolicyId?: pulumi.Input<string>;
    /**
     * One or more `frontendIpConfiguration` blocks as defined below.
     */
    frontendIpConfigurations?: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewayFrontendIpConfiguration>[]>;
    /**
     * One or more `frontendPort` blocks as defined below.
     */
    frontendPorts?: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewayFrontendPort>[]>;
    /**
     * One or more `gatewayIpConfiguration` blocks as defined below.
     */
    gatewayIpConfigurations?: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewayGatewayIpConfiguration>[]>;
    /**
     * One or more `httpListener` blocks as defined below.
     */
    httpListeners?: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewayHttpListener>[]>;
    /**
     * A `identity` block.
     */
    identity?: pulumi.Input<inputs.network.ApplicationGatewayIdentity>;
    /**
     * The Azure region where the Application Gateway should exist. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the Application Gateway. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * One or more `probe` blocks as defined below.
     */
    probes?: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewayProbe>[]>;
    /**
     * A `redirectConfiguration` block as defined below.
     */
    redirectConfigurations?: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewayRedirectConfiguration>[]>;
    /**
     * One or more `requestRoutingRule` blocks as defined below.
     */
    requestRoutingRules?: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewayRequestRoutingRule>[]>;
    /**
     * The name of the resource group in which to the Application Gateway should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * One or more `rewriteRuleSet` blocks as defined below. Only valid for v2 SKUs.
     */
    rewriteRuleSets?: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewayRewriteRuleSet>[]>;
    /**
     * A `sku` block as defined below.
     */
    sku?: pulumi.Input<inputs.network.ApplicationGatewaySku>;
    /**
     * One or more `sslCertificate` blocks as defined below.
     */
    sslCertificates?: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewaySslCertificate>[]>;
    /**
     * a `ssl policy` block as defined below.
     */
    sslPolicies?: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewaySslPolicy>[]>;
    /**
     * One or more `sslProfile` blocks as defined below.
     */
    sslProfiles?: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewaySslProfile>[]>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * One or more `trustedClientCertificate` blocks as defined below.
     */
    trustedClientCertificates?: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewayTrustedClientCertificate>[]>;
    /**
     * One or more `trustedRootCertificate` blocks as defined below.
     */
    trustedRootCertificates?: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewayTrustedRootCertificate>[]>;
    /**
     * One or more `urlPathMap` blocks as defined below.
     */
    urlPathMaps?: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewayUrlPathMap>[]>;
    /**
     * A `wafConfiguration` block as defined below.
     */
    wafConfiguration?: pulumi.Input<inputs.network.ApplicationGatewayWafConfiguration>;
    /**
     * A collection of availability zones to spread the Application Gateway over.
     */
    zones?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a ApplicationGateway resource.
 */
export interface ApplicationGatewayArgs {
    /**
     * One or more `authenticationCertificate` blocks as defined below.
     */
    authenticationCertificates?: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewayAuthenticationCertificate>[]>;
    /**
     * A `autoscaleConfiguration` block as defined below.
     */
    autoscaleConfiguration?: pulumi.Input<inputs.network.ApplicationGatewayAutoscaleConfiguration>;
    /**
     * One or more `backendAddressPool` blocks as defined below.
     */
    backendAddressPools: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewayBackendAddressPool>[]>;
    /**
     * One or more `backendHttpSettings` blocks as defined below.
     */
    backendHttpSettings: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewayBackendHttpSetting>[]>;
    /**
     * One or more `customErrorConfiguration` blocks as defined below.
     */
    customErrorConfigurations?: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewayCustomErrorConfiguration>[]>;
    /**
     * Is HTTP2 enabled on the application gateway resource? Defaults to `false`.
     */
    enableHttp2?: pulumi.Input<boolean>;
    /**
     * The ID of the Web Application Firewall Policy.
     */
    firewallPolicyId?: pulumi.Input<string>;
    /**
     * One or more `frontendIpConfiguration` blocks as defined below.
     */
    frontendIpConfigurations: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewayFrontendIpConfiguration>[]>;
    /**
     * One or more `frontendPort` blocks as defined below.
     */
    frontendPorts: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewayFrontendPort>[]>;
    /**
     * One or more `gatewayIpConfiguration` blocks as defined below.
     */
    gatewayIpConfigurations: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewayGatewayIpConfiguration>[]>;
    /**
     * One or more `httpListener` blocks as defined below.
     */
    httpListeners: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewayHttpListener>[]>;
    /**
     * A `identity` block.
     */
    identity?: pulumi.Input<inputs.network.ApplicationGatewayIdentity>;
    /**
     * The Azure region where the Application Gateway should exist. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the Application Gateway. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * One or more `probe` blocks as defined below.
     */
    probes?: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewayProbe>[]>;
    /**
     * A `redirectConfiguration` block as defined below.
     */
    redirectConfigurations?: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewayRedirectConfiguration>[]>;
    /**
     * One or more `requestRoutingRule` blocks as defined below.
     */
    requestRoutingRules: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewayRequestRoutingRule>[]>;
    /**
     * The name of the resource group in which to the Application Gateway should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * One or more `rewriteRuleSet` blocks as defined below. Only valid for v2 SKUs.
     */
    rewriteRuleSets?: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewayRewriteRuleSet>[]>;
    /**
     * A `sku` block as defined below.
     */
    sku: pulumi.Input<inputs.network.ApplicationGatewaySku>;
    /**
     * One or more `sslCertificate` blocks as defined below.
     */
    sslCertificates?: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewaySslCertificate>[]>;
    /**
     * a `ssl policy` block as defined below.
     */
    sslPolicies?: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewaySslPolicy>[]>;
    /**
     * One or more `sslProfile` blocks as defined below.
     */
    sslProfiles?: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewaySslProfile>[]>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * One or more `trustedClientCertificate` blocks as defined below.
     */
    trustedClientCertificates?: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewayTrustedClientCertificate>[]>;
    /**
     * One or more `trustedRootCertificate` blocks as defined below.
     */
    trustedRootCertificates?: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewayTrustedRootCertificate>[]>;
    /**
     * One or more `urlPathMap` blocks as defined below.
     */
    urlPathMaps?: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewayUrlPathMap>[]>;
    /**
     * A `wafConfiguration` block as defined below.
     */
    wafConfiguration?: pulumi.Input<inputs.network.ApplicationGatewayWafConfiguration>;
    /**
     * A collection of availability zones to spread the Application Gateway over.
     */
    zones?: pulumi.Input<pulumi.Input<string>[]>;
}
