module github.com/pulumi/pulumi-azure/provider/v4

go 1.16

require (
	github.com/Azure/go-autorest/autorest/azure/cli v0.4.2
	github.com/hashicorp/terraform-plugin-sdk/v2 v2.7.0
	github.com/hashicorp/terraform-provider-azurerm v1.44.1-0.20210812080924-c853ec4222d8
	github.com/hashicorp/terraform-provider-azurerm/shim v0.0.0
	github.com/pulumi/pulumi-terraform-bridge/v3 v3.4.1-0.20210714215802-5020116ac4e6
	github.com/pulumi/pulumi/pkg/v3 v3.7.1-0.20210714212650-083fc64ff547 // indirect
	github.com/pulumi/pulumi/sdk/v3 v3.7.0
)

replace (
	github.com/hashicorp/go-getter v1.5.0 => github.com/hashicorp/go-getter v1.4.0
	github.com/hashicorp/terraform-plugin-sdk/v2 => github.com/pulumi/terraform-plugin-sdk/v2 v2.0.0-20210629210550-59d24255d71f
	github.com/hashicorp/terraform-provider-azurerm => github.com/pulumi/terraform-provider-azurerm v1.41.1-0.20210910110835-44cf8ede075f
	github.com/hashicorp/terraform-provider-azurerm/shim => ./shim
	github.com/hashicorp/vault => github.com/hashicorp/vault v1.2.0
)
