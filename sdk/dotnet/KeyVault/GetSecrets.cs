// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Azure.KeyVault
{
    public static class GetSecrets
    {
        /// <summary>
        /// Use this data source to retrieve a list of secret names from an existing Key Vault Secret.
        /// </summary>
        public static Task<GetSecretsResult> InvokeAsync(GetSecretsArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetSecretsResult>("azure:keyvault/getSecrets:getSecrets", args ?? new GetSecretsArgs(), options.WithVersion());
    }


    public sealed class GetSecretsArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Specifies the ID of the Key Vault instance to fetch secret names from, available on the `azure.keyvault.KeyVault` Data Source / Resource.
        /// </summary>
        [Input("keyVaultId", required: true)]
        public string KeyVaultId { get; set; } = null!;

        public GetSecretsArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetSecretsResult
    {
        /// <summary>
        /// The provider-assigned unique ID for this managed resource.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The Key Vault ID.
        /// </summary>
        public readonly string KeyVaultId;
        /// <summary>
        /// List containing names of secrets that exist in this Key Vault.
        /// </summary>
        public readonly ImmutableArray<string> Names;

        [OutputConstructor]
        private GetSecretsResult(
            string id,

            string keyVaultId,

            ImmutableArray<string> names)
        {
            Id = id;
            KeyVaultId = keyVaultId;
            Names = names;
        }
    }
}
