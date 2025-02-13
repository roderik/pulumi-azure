// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Azure.DataProtection
{
    /// <summary>
    /// Manages a Backup Instance Blob Storage.
    /// 
    /// ## Import
    /// 
    /// Backup Instance Blob Storages can be imported using the `resource id`, e.g.
    /// 
    /// ```sh
    ///  $ pulumi import azure:dataprotection/backupInstanceBlogStorage:BackupInstanceBlogStorage example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.DataProtection/backupVaults/vault1/backupInstances/backupInstance1
    /// ```
    /// </summary>
    [AzureResourceType("azure:dataprotection/backupInstanceBlogStorage:BackupInstanceBlogStorage")]
    public partial class BackupInstanceBlogStorage : Pulumi.CustomResource
    {
        /// <summary>
        /// The ID of the Backup Policy.
        /// </summary>
        [Output("backupPolicyId")]
        public Output<string> BackupPolicyId { get; private set; } = null!;

        [Output("location")]
        public Output<string> Location { get; private set; } = null!;

        /// <summary>
        /// The name which should be used for this Backup Instance Blob Storage. Changing this forces a new Backup Instance Blob Storage to be created.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The ID of the source Storage Account. Changing this forces a new Backup Instance Blob Storage to be created.
        /// </summary>
        [Output("storageAccountId")]
        public Output<string> StorageAccountId { get; private set; } = null!;

        /// <summary>
        /// The ID of the Backup Vault within which the Backup Instance Blob Storage should exist. Changing this forces a new Backup Instance Blob Storage to be created.
        /// </summary>
        [Output("vaultId")]
        public Output<string> VaultId { get; private set; } = null!;


        /// <summary>
        /// Create a BackupInstanceBlogStorage resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public BackupInstanceBlogStorage(string name, BackupInstanceBlogStorageArgs args, CustomResourceOptions? options = null)
            : base("azure:dataprotection/backupInstanceBlogStorage:BackupInstanceBlogStorage", name, args ?? new BackupInstanceBlogStorageArgs(), MakeResourceOptions(options, ""))
        {
        }

        private BackupInstanceBlogStorage(string name, Input<string> id, BackupInstanceBlogStorageState? state = null, CustomResourceOptions? options = null)
            : base("azure:dataprotection/backupInstanceBlogStorage:BackupInstanceBlogStorage", name, state, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing BackupInstanceBlogStorage resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static BackupInstanceBlogStorage Get(string name, Input<string> id, BackupInstanceBlogStorageState? state = null, CustomResourceOptions? options = null)
        {
            return new BackupInstanceBlogStorage(name, id, state, options);
        }
    }

    public sealed class BackupInstanceBlogStorageArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The ID of the Backup Policy.
        /// </summary>
        [Input("backupPolicyId", required: true)]
        public Input<string> BackupPolicyId { get; set; } = null!;

        [Input("location")]
        public Input<string>? Location { get; set; }

        /// <summary>
        /// The name which should be used for this Backup Instance Blob Storage. Changing this forces a new Backup Instance Blob Storage to be created.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// The ID of the source Storage Account. Changing this forces a new Backup Instance Blob Storage to be created.
        /// </summary>
        [Input("storageAccountId", required: true)]
        public Input<string> StorageAccountId { get; set; } = null!;

        /// <summary>
        /// The ID of the Backup Vault within which the Backup Instance Blob Storage should exist. Changing this forces a new Backup Instance Blob Storage to be created.
        /// </summary>
        [Input("vaultId", required: true)]
        public Input<string> VaultId { get; set; } = null!;

        public BackupInstanceBlogStorageArgs()
        {
        }
    }

    public sealed class BackupInstanceBlogStorageState : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The ID of the Backup Policy.
        /// </summary>
        [Input("backupPolicyId")]
        public Input<string>? BackupPolicyId { get; set; }

        [Input("location")]
        public Input<string>? Location { get; set; }

        /// <summary>
        /// The name which should be used for this Backup Instance Blob Storage. Changing this forces a new Backup Instance Blob Storage to be created.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// The ID of the source Storage Account. Changing this forces a new Backup Instance Blob Storage to be created.
        /// </summary>
        [Input("storageAccountId")]
        public Input<string>? StorageAccountId { get; set; }

        /// <summary>
        /// The ID of the Backup Vault within which the Backup Instance Blob Storage should exist. Changing this forces a new Backup Instance Blob Storage to be created.
        /// </summary>
        [Input("vaultId")]
        public Input<string>? VaultId { get; set; }

        public BackupInstanceBlogStorageState()
        {
        }
    }
}
