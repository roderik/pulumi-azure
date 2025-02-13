// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
import * as utilities from "../utilities";

/**
 * Manages a Data Factory Azure-SSIS Integration Runtime.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleFactory = new azure.datafactory.Factory("exampleFactory", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * const exampleIntegrationRuntimeSsis = new azure.datafactory.IntegrationRuntimeSsis("exampleIntegrationRuntimeSsis", {
 *     dataFactoryName: exampleFactory.name,
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     nodeSize: "Standard_D8_v3",
 * });
 * ```
 *
 * ## Import
 *
 * Data Factory Azure-SSIS Integration Runtimes can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:datafactory/integrationRuntimeSsis:IntegrationRuntimeSsis example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/example/providers/Microsoft.DataFactory/factories/example/integrationruntimes/example
 * ```
 */
export class IntegrationRuntimeSsis extends pulumi.CustomResource {
    /**
     * Get an existing IntegrationRuntimeSsis resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IntegrationRuntimeSsisState, opts?: pulumi.CustomResourceOptions): IntegrationRuntimeSsis {
        return new IntegrationRuntimeSsis(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:datafactory/integrationRuntimeSsis:IntegrationRuntimeSsis';

    /**
     * Returns true if the given object is an instance of IntegrationRuntimeSsis.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IntegrationRuntimeSsis {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IntegrationRuntimeSsis.__pulumiType;
    }

    /**
     * A `catalogInfo` block as defined below.
     */
    public readonly catalogInfo!: pulumi.Output<outputs.datafactory.IntegrationRuntimeSsisCatalogInfo | undefined>;
    /**
     * A `customSetupScript` block as defined below.
     */
    public readonly customSetupScript!: pulumi.Output<outputs.datafactory.IntegrationRuntimeSsisCustomSetupScript | undefined>;
    /**
     * Specifies the name of the Data Factory the Azure-SSIS Integration Runtime belongs to. Changing this forces a new resource to be created.
     */
    public readonly dataFactoryName!: pulumi.Output<string>;
    /**
     * Integration runtime description.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The Azure-SSIS Integration Runtime edition. Valid values are `Standard` and `Enterprise`. Defaults to `Standard`.
     */
    public readonly edition!: pulumi.Output<string | undefined>;
    /**
     * An `expressCustomSetup` block as defined below.
     */
    public readonly expressCustomSetup!: pulumi.Output<outputs.datafactory.IntegrationRuntimeSsisExpressCustomSetup | undefined>;
    /**
     * The type of the license that is used. Valid values are `LicenseIncluded` and `BasePrice`. Defaults to `LicenseIncluded`.
     */
    public readonly licenseType!: pulumi.Output<string | undefined>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Defines the maximum parallel executions per node. Defaults to `1`. Max is `16`.
     */
    public readonly maxParallelExecutionsPerNode!: pulumi.Output<number | undefined>;
    /**
     * Specifies the name of the Azure-SSIS Integration Runtime. Changing this forces a new resource to be created. Must be globally unique. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The size of the nodes on which the Azure-SSIS Integration Runtime runs. Valid values are: `Standard_D2_v3`, `Standard_D4_v3`, `Standard_D8_v3`, `Standard_D16_v3`, `Standard_D32_v3`, `Standard_D64_v3`, `Standard_E2_v3`, `Standard_E4_v3`, `Standard_E8_v3`, `Standard_E16_v3`, `Standard_E32_v3`, `Standard_E64_v3`, `Standard_D1_v2`, `Standard_D2_v2`, `Standard_D3_v2`, `Standard_D4_v2`, `Standard_A4_v2` and `Standard_A8_v2`
     */
    public readonly nodeSize!: pulumi.Output<string>;
    /**
     * Number of nodes for the Azure-SSIS Integration Runtime. Max is `10`. Defaults to `1`.
     */
    public readonly numberOfNodes!: pulumi.Output<number | undefined>;
    /**
     * One or more `packageStore` block as defined below.
     */
    public readonly packageStores!: pulumi.Output<outputs.datafactory.IntegrationRuntimeSsisPackageStore[] | undefined>;
    /**
     * A `proxy` block as defined below.
     */
    public readonly proxy!: pulumi.Output<outputs.datafactory.IntegrationRuntimeSsisProxy | undefined>;
    /**
     * The name of the resource group in which to create the Azure-SSIS Integration Runtime. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * A `vnetIntegration` block as defined below.
     */
    public readonly vnetIntegration!: pulumi.Output<outputs.datafactory.IntegrationRuntimeSsisVnetIntegration | undefined>;

    /**
     * Create a IntegrationRuntimeSsis resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IntegrationRuntimeSsisArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IntegrationRuntimeSsisArgs | IntegrationRuntimeSsisState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IntegrationRuntimeSsisState | undefined;
            inputs["catalogInfo"] = state ? state.catalogInfo : undefined;
            inputs["customSetupScript"] = state ? state.customSetupScript : undefined;
            inputs["dataFactoryName"] = state ? state.dataFactoryName : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["edition"] = state ? state.edition : undefined;
            inputs["expressCustomSetup"] = state ? state.expressCustomSetup : undefined;
            inputs["licenseType"] = state ? state.licenseType : undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["maxParallelExecutionsPerNode"] = state ? state.maxParallelExecutionsPerNode : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["nodeSize"] = state ? state.nodeSize : undefined;
            inputs["numberOfNodes"] = state ? state.numberOfNodes : undefined;
            inputs["packageStores"] = state ? state.packageStores : undefined;
            inputs["proxy"] = state ? state.proxy : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["vnetIntegration"] = state ? state.vnetIntegration : undefined;
        } else {
            const args = argsOrState as IntegrationRuntimeSsisArgs | undefined;
            if ((!args || args.dataFactoryName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dataFactoryName'");
            }
            if ((!args || args.nodeSize === undefined) && !opts.urn) {
                throw new Error("Missing required property 'nodeSize'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["catalogInfo"] = args ? args.catalogInfo : undefined;
            inputs["customSetupScript"] = args ? args.customSetupScript : undefined;
            inputs["dataFactoryName"] = args ? args.dataFactoryName : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["edition"] = args ? args.edition : undefined;
            inputs["expressCustomSetup"] = args ? args.expressCustomSetup : undefined;
            inputs["licenseType"] = args ? args.licenseType : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["maxParallelExecutionsPerNode"] = args ? args.maxParallelExecutionsPerNode : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["nodeSize"] = args ? args.nodeSize : undefined;
            inputs["numberOfNodes"] = args ? args.numberOfNodes : undefined;
            inputs["packageStores"] = args ? args.packageStores : undefined;
            inputs["proxy"] = args ? args.proxy : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["vnetIntegration"] = args ? args.vnetIntegration : undefined;
        }
        if (!opts.version) {
            opts = pulumi.mergeOptions(opts, { version: utilities.getVersion()});
        }
        super(IntegrationRuntimeSsis.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering IntegrationRuntimeSsis resources.
 */
export interface IntegrationRuntimeSsisState {
    /**
     * A `catalogInfo` block as defined below.
     */
    catalogInfo?: pulumi.Input<inputs.datafactory.IntegrationRuntimeSsisCatalogInfo>;
    /**
     * A `customSetupScript` block as defined below.
     */
    customSetupScript?: pulumi.Input<inputs.datafactory.IntegrationRuntimeSsisCustomSetupScript>;
    /**
     * Specifies the name of the Data Factory the Azure-SSIS Integration Runtime belongs to. Changing this forces a new resource to be created.
     */
    dataFactoryName?: pulumi.Input<string>;
    /**
     * Integration runtime description.
     */
    description?: pulumi.Input<string>;
    /**
     * The Azure-SSIS Integration Runtime edition. Valid values are `Standard` and `Enterprise`. Defaults to `Standard`.
     */
    edition?: pulumi.Input<string>;
    /**
     * An `expressCustomSetup` block as defined below.
     */
    expressCustomSetup?: pulumi.Input<inputs.datafactory.IntegrationRuntimeSsisExpressCustomSetup>;
    /**
     * The type of the license that is used. Valid values are `LicenseIncluded` and `BasePrice`. Defaults to `LicenseIncluded`.
     */
    licenseType?: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Defines the maximum parallel executions per node. Defaults to `1`. Max is `16`.
     */
    maxParallelExecutionsPerNode?: pulumi.Input<number>;
    /**
     * Specifies the name of the Azure-SSIS Integration Runtime. Changing this forces a new resource to be created. Must be globally unique. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
     */
    name?: pulumi.Input<string>;
    /**
     * The size of the nodes on which the Azure-SSIS Integration Runtime runs. Valid values are: `Standard_D2_v3`, `Standard_D4_v3`, `Standard_D8_v3`, `Standard_D16_v3`, `Standard_D32_v3`, `Standard_D64_v3`, `Standard_E2_v3`, `Standard_E4_v3`, `Standard_E8_v3`, `Standard_E16_v3`, `Standard_E32_v3`, `Standard_E64_v3`, `Standard_D1_v2`, `Standard_D2_v2`, `Standard_D3_v2`, `Standard_D4_v2`, `Standard_A4_v2` and `Standard_A8_v2`
     */
    nodeSize?: pulumi.Input<string>;
    /**
     * Number of nodes for the Azure-SSIS Integration Runtime. Max is `10`. Defaults to `1`.
     */
    numberOfNodes?: pulumi.Input<number>;
    /**
     * One or more `packageStore` block as defined below.
     */
    packageStores?: pulumi.Input<pulumi.Input<inputs.datafactory.IntegrationRuntimeSsisPackageStore>[]>;
    /**
     * A `proxy` block as defined below.
     */
    proxy?: pulumi.Input<inputs.datafactory.IntegrationRuntimeSsisProxy>;
    /**
     * The name of the resource group in which to create the Azure-SSIS Integration Runtime. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A `vnetIntegration` block as defined below.
     */
    vnetIntegration?: pulumi.Input<inputs.datafactory.IntegrationRuntimeSsisVnetIntegration>;
}

/**
 * The set of arguments for constructing a IntegrationRuntimeSsis resource.
 */
export interface IntegrationRuntimeSsisArgs {
    /**
     * A `catalogInfo` block as defined below.
     */
    catalogInfo?: pulumi.Input<inputs.datafactory.IntegrationRuntimeSsisCatalogInfo>;
    /**
     * A `customSetupScript` block as defined below.
     */
    customSetupScript?: pulumi.Input<inputs.datafactory.IntegrationRuntimeSsisCustomSetupScript>;
    /**
     * Specifies the name of the Data Factory the Azure-SSIS Integration Runtime belongs to. Changing this forces a new resource to be created.
     */
    dataFactoryName: pulumi.Input<string>;
    /**
     * Integration runtime description.
     */
    description?: pulumi.Input<string>;
    /**
     * The Azure-SSIS Integration Runtime edition. Valid values are `Standard` and `Enterprise`. Defaults to `Standard`.
     */
    edition?: pulumi.Input<string>;
    /**
     * An `expressCustomSetup` block as defined below.
     */
    expressCustomSetup?: pulumi.Input<inputs.datafactory.IntegrationRuntimeSsisExpressCustomSetup>;
    /**
     * The type of the license that is used. Valid values are `LicenseIncluded` and `BasePrice`. Defaults to `LicenseIncluded`.
     */
    licenseType?: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Defines the maximum parallel executions per node. Defaults to `1`. Max is `16`.
     */
    maxParallelExecutionsPerNode?: pulumi.Input<number>;
    /**
     * Specifies the name of the Azure-SSIS Integration Runtime. Changing this forces a new resource to be created. Must be globally unique. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
     */
    name?: pulumi.Input<string>;
    /**
     * The size of the nodes on which the Azure-SSIS Integration Runtime runs. Valid values are: `Standard_D2_v3`, `Standard_D4_v3`, `Standard_D8_v3`, `Standard_D16_v3`, `Standard_D32_v3`, `Standard_D64_v3`, `Standard_E2_v3`, `Standard_E4_v3`, `Standard_E8_v3`, `Standard_E16_v3`, `Standard_E32_v3`, `Standard_E64_v3`, `Standard_D1_v2`, `Standard_D2_v2`, `Standard_D3_v2`, `Standard_D4_v2`, `Standard_A4_v2` and `Standard_A8_v2`
     */
    nodeSize: pulumi.Input<string>;
    /**
     * Number of nodes for the Azure-SSIS Integration Runtime. Max is `10`. Defaults to `1`.
     */
    numberOfNodes?: pulumi.Input<number>;
    /**
     * One or more `packageStore` block as defined below.
     */
    packageStores?: pulumi.Input<pulumi.Input<inputs.datafactory.IntegrationRuntimeSsisPackageStore>[]>;
    /**
     * A `proxy` block as defined below.
     */
    proxy?: pulumi.Input<inputs.datafactory.IntegrationRuntimeSsisProxy>;
    /**
     * The name of the resource group in which to create the Azure-SSIS Integration Runtime. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A `vnetIntegration` block as defined below.
     */
    vnetIntegration?: pulumi.Input<inputs.datafactory.IntegrationRuntimeSsisVnetIntegration>;
}
