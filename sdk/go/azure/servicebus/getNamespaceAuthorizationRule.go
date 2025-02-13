// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package servicebus

import (
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

// Use this data source to access information about an existing ServiceBus Namespace Authorization Rule.
//
// ## Example Usage
//
// ```go
// package main
//
// import (
// 	"github.com/pulumi/pulumi-azure/sdk/v4/go/azure/servicebus"
// 	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
// )
//
// func main() {
// 	pulumi.Run(func(ctx *pulumi.Context) error {
// 		example, err := servicebus.LookupNamespaceAuthorizationRule(ctx, &servicebus.LookupNamespaceAuthorizationRuleArgs{
// 			Name:              "examplerule",
// 			NamespaceName:     "examplenamespace",
// 			ResourceGroupName: "example-resources",
// 		}, nil)
// 		if err != nil {
// 			return err
// 		}
// 		ctx.Export("ruleId", example.Id)
// 		return nil
// 	})
// }
// ```
func LookupNamespaceAuthorizationRule(ctx *pulumi.Context, args *LookupNamespaceAuthorizationRuleArgs, opts ...pulumi.InvokeOption) (*LookupNamespaceAuthorizationRuleResult, error) {
	var rv LookupNamespaceAuthorizationRuleResult
	err := ctx.Invoke("azure:servicebus/getNamespaceAuthorizationRule:getNamespaceAuthorizationRule", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

// A collection of arguments for invoking getNamespaceAuthorizationRule.
type LookupNamespaceAuthorizationRuleArgs struct {
	// Specifies the name of the ServiceBus Namespace Authorization Rule.
	Name string `pulumi:"name"`
	// Specifies the name of the ServiceBus Namespace.
	NamespaceName string `pulumi:"namespaceName"`
	// Specifies the name of the Resource Group where the ServiceBus Namespace exists.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// A collection of values returned by getNamespaceAuthorizationRule.
type LookupNamespaceAuthorizationRuleResult struct {
	// The provider-assigned unique ID for this managed resource.
	Id            string `pulumi:"id"`
	Name          string `pulumi:"name"`
	NamespaceName string `pulumi:"namespaceName"`
	// The primary connection string for the authorization rule.
	PrimaryConnectionString string `pulumi:"primaryConnectionString"`
	// The alias Primary Connection String for the ServiceBus Namespace, if the namespace is Geo DR paired.
	PrimaryConnectionStringAlias string `pulumi:"primaryConnectionStringAlias"`
	// The primary access key for the authorization rule.
	PrimaryKey        string `pulumi:"primaryKey"`
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The secondary connection string for the authorization rule.
	SecondaryConnectionString string `pulumi:"secondaryConnectionString"`
	// The alias Secondary Connection String for the ServiceBus Namespace
	SecondaryConnectionStringAlias string `pulumi:"secondaryConnectionStringAlias"`
	// The secondary access key for the authorization rule.
	SecondaryKey string `pulumi:"secondaryKey"`
}
