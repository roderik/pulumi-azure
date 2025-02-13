// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package synapse

import (
	"fmt"

	"github.com/blang/semver"
	"github.com/pulumi/pulumi-azure/sdk/v4/go/azure"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

type module struct {
	version semver.Version
}

func (m *module) Version() semver.Version {
	return m.version
}

func (m *module) Construct(ctx *pulumi.Context, name, typ, urn string) (r pulumi.Resource, err error) {
	switch typ {
	case "azure:synapse/firewallRule:FirewallRule":
		r = &FirewallRule{}
	case "azure:synapse/managedPrivateEndpoint:ManagedPrivateEndpoint":
		r = &ManagedPrivateEndpoint{}
	case "azure:synapse/privateLinkHub:PrivateLinkHub":
		r = &PrivateLinkHub{}
	case "azure:synapse/roleAssignment:RoleAssignment":
		r = &RoleAssignment{}
	case "azure:synapse/sparkPool:SparkPool":
		r = &SparkPool{}
	case "azure:synapse/sqlPool:SqlPool":
		r = &SqlPool{}
	case "azure:synapse/workspace:Workspace":
		r = &Workspace{}
	default:
		return nil, fmt.Errorf("unknown resource type: %s", typ)
	}

	err = ctx.RegisterResource(typ, name, nil, r, pulumi.URN_(urn))
	return
}

func init() {
	version, err := azure.PkgVersion()
	if err != nil {
		fmt.Printf("failed to determine package version. defaulting to v1: %v\n", err)
	}
	pulumi.RegisterResourceModule(
		"azure",
		"synapse/firewallRule",
		&module{version},
	)
	pulumi.RegisterResourceModule(
		"azure",
		"synapse/managedPrivateEndpoint",
		&module{version},
	)
	pulumi.RegisterResourceModule(
		"azure",
		"synapse/privateLinkHub",
		&module{version},
	)
	pulumi.RegisterResourceModule(
		"azure",
		"synapse/roleAssignment",
		&module{version},
	)
	pulumi.RegisterResourceModule(
		"azure",
		"synapse/sparkPool",
		&module{version},
	)
	pulumi.RegisterResourceModule(
		"azure",
		"synapse/sqlPool",
		&module{version},
	)
	pulumi.RegisterResourceModule(
		"azure",
		"synapse/workspace",
		&module{version},
	)
}
