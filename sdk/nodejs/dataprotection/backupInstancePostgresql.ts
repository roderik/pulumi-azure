// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manages a Backup Instance to back up PostgreSQL.
 *
 * > **Note**: Before using this resource, there are some prerequisite permissions for configure backup and restore. See more details from https://docs.microsoft.com/en-us/azure/backup/backup-azure-database-postgresql#prerequisite-permissions-for-configure-backup-and-restore.
 *
 * ## Import
 *
 * Backup Instance PostgreSQL can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:dataprotection/backupInstancePostgresql:BackupInstancePostgresql example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.DataProtection/backupVaults/vault1/backupInstances/backupInstance1
 * ```
 */
export class BackupInstancePostgresql extends pulumi.CustomResource {
    /**
     * Get an existing BackupInstancePostgresql resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BackupInstancePostgresqlState, opts?: pulumi.CustomResourceOptions): BackupInstancePostgresql {
        return new BackupInstancePostgresql(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:dataprotection/backupInstancePostgresql:BackupInstancePostgresql';

    /**
     * Returns true if the given object is an instance of BackupInstancePostgresql.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BackupInstancePostgresql {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BackupInstancePostgresql.__pulumiType;
    }

    /**
     * The ID of the Backup Policy.
     */
    public readonly backupPolicyId!: pulumi.Output<string>;
    /**
     * The ID or versionless ID of the key vault secret which stores the connection string of the database.
     */
    public readonly databaseCredentialKeyVaultSecretId!: pulumi.Output<string | undefined>;
    /**
     * The ID of the source database. Changing this forces a new Backup Instance PostgreSQL to be created.
     */
    public readonly databaseId!: pulumi.Output<string>;
    /**
     * The location of the source database. Changing this forces a new Backup Instance PostgreSQL to be created.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name which should be used for this Backup Instance PostgreSQL. Changing this forces a new Backup Instance PostgreSQL to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The ID of the Backup Vault within which the PostgreSQL Backup Instance should exist. Changing this forces a new Backup Instance PostgreSQL to be created.
     */
    public readonly vaultId!: pulumi.Output<string>;

    /**
     * Create a BackupInstancePostgresql resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BackupInstancePostgresqlArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: BackupInstancePostgresqlArgs | BackupInstancePostgresqlState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as BackupInstancePostgresqlState | undefined;
            inputs["backupPolicyId"] = state ? state.backupPolicyId : undefined;
            inputs["databaseCredentialKeyVaultSecretId"] = state ? state.databaseCredentialKeyVaultSecretId : undefined;
            inputs["databaseId"] = state ? state.databaseId : undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["vaultId"] = state ? state.vaultId : undefined;
        } else {
            const args = argsOrState as BackupInstancePostgresqlArgs | undefined;
            if ((!args || args.backupPolicyId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'backupPolicyId'");
            }
            if ((!args || args.databaseId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'databaseId'");
            }
            if ((!args || args.vaultId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vaultId'");
            }
            inputs["backupPolicyId"] = args ? args.backupPolicyId : undefined;
            inputs["databaseCredentialKeyVaultSecretId"] = args ? args.databaseCredentialKeyVaultSecretId : undefined;
            inputs["databaseId"] = args ? args.databaseId : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["vaultId"] = args ? args.vaultId : undefined;
        }
        if (!opts.version) {
            opts = pulumi.mergeOptions(opts, { version: utilities.getVersion()});
        }
        super(BackupInstancePostgresql.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering BackupInstancePostgresql resources.
 */
export interface BackupInstancePostgresqlState {
    /**
     * The ID of the Backup Policy.
     */
    backupPolicyId?: pulumi.Input<string>;
    /**
     * The ID or versionless ID of the key vault secret which stores the connection string of the database.
     */
    databaseCredentialKeyVaultSecretId?: pulumi.Input<string>;
    /**
     * The ID of the source database. Changing this forces a new Backup Instance PostgreSQL to be created.
     */
    databaseId?: pulumi.Input<string>;
    /**
     * The location of the source database. Changing this forces a new Backup Instance PostgreSQL to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name which should be used for this Backup Instance PostgreSQL. Changing this forces a new Backup Instance PostgreSQL to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The ID of the Backup Vault within which the PostgreSQL Backup Instance should exist. Changing this forces a new Backup Instance PostgreSQL to be created.
     */
    vaultId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a BackupInstancePostgresql resource.
 */
export interface BackupInstancePostgresqlArgs {
    /**
     * The ID of the Backup Policy.
     */
    backupPolicyId: pulumi.Input<string>;
    /**
     * The ID or versionless ID of the key vault secret which stores the connection string of the database.
     */
    databaseCredentialKeyVaultSecretId?: pulumi.Input<string>;
    /**
     * The ID of the source database. Changing this forces a new Backup Instance PostgreSQL to be created.
     */
    databaseId: pulumi.Input<string>;
    /**
     * The location of the source database. Changing this forces a new Backup Instance PostgreSQL to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name which should be used for this Backup Instance PostgreSQL. Changing this forces a new Backup Instance PostgreSQL to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The ID of the Backup Vault within which the PostgreSQL Backup Instance should exist. Changing this forces a new Backup Instance PostgreSQL to be created.
     */
    vaultId: pulumi.Input<string>;
}
