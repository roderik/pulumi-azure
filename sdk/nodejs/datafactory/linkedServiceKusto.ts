// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manages a Linked Service (connection) between a Kusto Cluster and Azure Data Factory.
 *
 * ## Import
 *
 * Data Factory Linked Service's can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:datafactory/linkedServiceKusto:LinkedServiceKusto example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/example/providers/Microsoft.DataFactory/factories/example/linkedservices/example
 * ```
 */
export class LinkedServiceKusto extends pulumi.CustomResource {
    /**
     * Get an existing LinkedServiceKusto resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LinkedServiceKustoState, opts?: pulumi.CustomResourceOptions): LinkedServiceKusto {
        return new LinkedServiceKusto(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:datafactory/linkedServiceKusto:LinkedServiceKusto';

    /**
     * Returns true if the given object is an instance of LinkedServiceKusto.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LinkedServiceKusto {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LinkedServiceKusto.__pulumiType;
    }

    /**
     * A map of additional properties to associate with the Data Factory Linked Service.
     */
    public readonly additionalProperties!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * List of tags that can be used for describing the Data Factory Linked Service.
     */
    public readonly annotations!: pulumi.Output<string[] | undefined>;
    /**
     * The Data Factory ID in which to associate the Linked Service with. Changing this forces a new resource.
     */
    public readonly dataFactoryId!: pulumi.Output<string>;
    /**
     * The description for the Data Factory Linked Service.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The integration runtime reference to associate with the Data Factory Linked Service.
     */
    public readonly integrationRuntimeName!: pulumi.Output<string | undefined>;
    /**
     * The Kusto Database Name.
     */
    public readonly kustoDatabaseName!: pulumi.Output<string>;
    /**
     * The URI of the Kusto Cluster endpoint.
     */
    public readonly kustoEndpoint!: pulumi.Output<string>;
    /**
     * Specifies the name of the Data Factory Linked Service. Changing this forces a new resource to be created. Must be unique within a data
     * factory. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * A map of parameters to associate with the Data Factory Linked Service.
     */
    public readonly parameters!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The service principal id in which to authenticate against the Kusto Database.
     */
    public readonly servicePrincipalId!: pulumi.Output<string | undefined>;
    /**
     * The service principal key in which to authenticate against the Kusto Database.
     */
    public readonly servicePrincipalKey!: pulumi.Output<string | undefined>;
    /**
     * The service principal tenant id or name in which to authenticate against the Kusto Database.
     */
    public readonly tenant!: pulumi.Output<string | undefined>;
    /**
     * Whether to use the Data Factory's managed identity to authenticate against the Kusto Database.
     */
    public readonly useManagedIdentity!: pulumi.Output<boolean | undefined>;

    /**
     * Create a LinkedServiceKusto resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LinkedServiceKustoArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LinkedServiceKustoArgs | LinkedServiceKustoState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LinkedServiceKustoState | undefined;
            inputs["additionalProperties"] = state ? state.additionalProperties : undefined;
            inputs["annotations"] = state ? state.annotations : undefined;
            inputs["dataFactoryId"] = state ? state.dataFactoryId : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["integrationRuntimeName"] = state ? state.integrationRuntimeName : undefined;
            inputs["kustoDatabaseName"] = state ? state.kustoDatabaseName : undefined;
            inputs["kustoEndpoint"] = state ? state.kustoEndpoint : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["parameters"] = state ? state.parameters : undefined;
            inputs["servicePrincipalId"] = state ? state.servicePrincipalId : undefined;
            inputs["servicePrincipalKey"] = state ? state.servicePrincipalKey : undefined;
            inputs["tenant"] = state ? state.tenant : undefined;
            inputs["useManagedIdentity"] = state ? state.useManagedIdentity : undefined;
        } else {
            const args = argsOrState as LinkedServiceKustoArgs | undefined;
            if ((!args || args.dataFactoryId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dataFactoryId'");
            }
            if ((!args || args.kustoDatabaseName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kustoDatabaseName'");
            }
            if ((!args || args.kustoEndpoint === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kustoEndpoint'");
            }
            inputs["additionalProperties"] = args ? args.additionalProperties : undefined;
            inputs["annotations"] = args ? args.annotations : undefined;
            inputs["dataFactoryId"] = args ? args.dataFactoryId : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["integrationRuntimeName"] = args ? args.integrationRuntimeName : undefined;
            inputs["kustoDatabaseName"] = args ? args.kustoDatabaseName : undefined;
            inputs["kustoEndpoint"] = args ? args.kustoEndpoint : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["parameters"] = args ? args.parameters : undefined;
            inputs["servicePrincipalId"] = args ? args.servicePrincipalId : undefined;
            inputs["servicePrincipalKey"] = args ? args.servicePrincipalKey : undefined;
            inputs["tenant"] = args ? args.tenant : undefined;
            inputs["useManagedIdentity"] = args ? args.useManagedIdentity : undefined;
        }
        if (!opts.version) {
            opts = pulumi.mergeOptions(opts, { version: utilities.getVersion()});
        }
        super(LinkedServiceKusto.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering LinkedServiceKusto resources.
 */
export interface LinkedServiceKustoState {
    /**
     * A map of additional properties to associate with the Data Factory Linked Service.
     */
    additionalProperties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * List of tags that can be used for describing the Data Factory Linked Service.
     */
    annotations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The Data Factory ID in which to associate the Linked Service with. Changing this forces a new resource.
     */
    dataFactoryId?: pulumi.Input<string>;
    /**
     * The description for the Data Factory Linked Service.
     */
    description?: pulumi.Input<string>;
    /**
     * The integration runtime reference to associate with the Data Factory Linked Service.
     */
    integrationRuntimeName?: pulumi.Input<string>;
    /**
     * The Kusto Database Name.
     */
    kustoDatabaseName?: pulumi.Input<string>;
    /**
     * The URI of the Kusto Cluster endpoint.
     */
    kustoEndpoint?: pulumi.Input<string>;
    /**
     * Specifies the name of the Data Factory Linked Service. Changing this forces a new resource to be created. Must be unique within a data
     * factory. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
     */
    name?: pulumi.Input<string>;
    /**
     * A map of parameters to associate with the Data Factory Linked Service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The service principal id in which to authenticate against the Kusto Database.
     */
    servicePrincipalId?: pulumi.Input<string>;
    /**
     * The service principal key in which to authenticate against the Kusto Database.
     */
    servicePrincipalKey?: pulumi.Input<string>;
    /**
     * The service principal tenant id or name in which to authenticate against the Kusto Database.
     */
    tenant?: pulumi.Input<string>;
    /**
     * Whether to use the Data Factory's managed identity to authenticate against the Kusto Database.
     */
    useManagedIdentity?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a LinkedServiceKusto resource.
 */
export interface LinkedServiceKustoArgs {
    /**
     * A map of additional properties to associate with the Data Factory Linked Service.
     */
    additionalProperties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * List of tags that can be used for describing the Data Factory Linked Service.
     */
    annotations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The Data Factory ID in which to associate the Linked Service with. Changing this forces a new resource.
     */
    dataFactoryId: pulumi.Input<string>;
    /**
     * The description for the Data Factory Linked Service.
     */
    description?: pulumi.Input<string>;
    /**
     * The integration runtime reference to associate with the Data Factory Linked Service.
     */
    integrationRuntimeName?: pulumi.Input<string>;
    /**
     * The Kusto Database Name.
     */
    kustoDatabaseName: pulumi.Input<string>;
    /**
     * The URI of the Kusto Cluster endpoint.
     */
    kustoEndpoint: pulumi.Input<string>;
    /**
     * Specifies the name of the Data Factory Linked Service. Changing this forces a new resource to be created. Must be unique within a data
     * factory. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
     */
    name?: pulumi.Input<string>;
    /**
     * A map of parameters to associate with the Data Factory Linked Service.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The service principal id in which to authenticate against the Kusto Database.
     */
    servicePrincipalId?: pulumi.Input<string>;
    /**
     * The service principal key in which to authenticate against the Kusto Database.
     */
    servicePrincipalKey?: pulumi.Input<string>;
    /**
     * The service principal tenant id or name in which to authenticate against the Kusto Database.
     */
    tenant?: pulumi.Input<string>;
    /**
     * Whether to use the Data Factory's managed identity to authenticate against the Kusto Database.
     */
    useManagedIdentity?: pulumi.Input<boolean>;
}
