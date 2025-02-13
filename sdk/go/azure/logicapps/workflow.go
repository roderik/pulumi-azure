// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package logicapps

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

// Manages a Logic App Workflow.
//
// ## Example Usage
//
// ```go
// package main
//
// import (
// 	"github.com/pulumi/pulumi-azure/sdk/v4/go/azure/core"
// 	"github.com/pulumi/pulumi-azure/sdk/v4/go/azure/logicapps"
// 	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
// )
//
// func main() {
// 	pulumi.Run(func(ctx *pulumi.Context) error {
// 		exampleResourceGroup, err := core.NewResourceGroup(ctx, "exampleResourceGroup", &core.ResourceGroupArgs{
// 			Location: pulumi.String("West Europe"),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		_, err = logicapps.NewWorkflow(ctx, "exampleWorkflow", &logicapps.WorkflowArgs{
// 			Location:          exampleResourceGroup.Location,
// 			ResourceGroupName: exampleResourceGroup.Name,
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		return nil
// 	})
// }
// ```
//
// ## Import
//
// Logic App Workflows can be imported using the `resource id`, e.g.
//
// ```sh
//  $ pulumi import azure:logicapps/workflow:Workflow workflow1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Logic/workflows/workflow1
// ```
type Workflow struct {
	pulumi.CustomResourceState

	// The Access Endpoint for the Logic App Workflow.
	AccessEndpoint pulumi.StringOutput `pulumi:"accessEndpoint"`
	// The list of access endpoint ip addresses of connector.
	ConnectorEndpointIpAddresses pulumi.StringArrayOutput `pulumi:"connectorEndpointIpAddresses"`
	// The list of outgoing ip addresses of connector.
	ConnectorOutboundIpAddresses pulumi.StringArrayOutput `pulumi:"connectorOutboundIpAddresses"`
	// The ID of the Integration Service Environment to which this Logic App Workflow belongs.  Changing this forces a new Logic App Workflow to be created.
	IntegrationServiceEnvironmentId pulumi.StringPtrOutput `pulumi:"integrationServiceEnvironmentId"`
	// Specifies the supported Azure location where the Logic App Workflow exists. Changing this forces a new resource to be created.
	Location pulumi.StringOutput `pulumi:"location"`
	// The ID of the integration account linked by this Logic App Workflow.
	LogicAppIntegrationAccountId pulumi.StringPtrOutput `pulumi:"logicAppIntegrationAccountId"`
	// Specifies the name of the Logic App Workflow. Changing this forces a new resource to be created.
	Name pulumi.StringOutput `pulumi:"name"`
	// A map of Key-Value pairs.
	Parameters pulumi.StringMapOutput `pulumi:"parameters"`
	// The name of the Resource Group in which the Logic App Workflow should be created. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringOutput `pulumi:"resourceGroupName"`
	// A mapping of tags to assign to the resource.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// The list of access endpoint ip addresses of workflow.
	WorkflowEndpointIpAddresses pulumi.StringArrayOutput `pulumi:"workflowEndpointIpAddresses"`
	// The list of outgoing ip addresses of workflow.
	WorkflowOutboundIpAddresses pulumi.StringArrayOutput `pulumi:"workflowOutboundIpAddresses"`
	// Specifies a map of Key-Value pairs of the Parameter Definitions to use for this Logic App Workflow. The key is the parameter name, and the value is a json encoded string of the parameter definition (see: https://docs.microsoft.com/en-us/azure/logic-apps/logic-apps-workflow-definition-language#parameters).
	WorkflowParameters pulumi.StringMapOutput `pulumi:"workflowParameters"`
	// Specifies the Schema to use for this Logic App Workflow. Defaults to `https://schema.management.azure.com/providers/Microsoft.Logic/schemas/2016-06-01/workflowdefinition.json#`. Changing this forces a new resource to be created.
	WorkflowSchema pulumi.StringPtrOutput `pulumi:"workflowSchema"`
	// Specifies the version of the Schema used for this Logic App Workflow. Defaults to `1.0.0.0`. Changing this forces a new resource to be created.
	WorkflowVersion pulumi.StringPtrOutput `pulumi:"workflowVersion"`
}

// NewWorkflow registers a new resource with the given unique name, arguments, and options.
func NewWorkflow(ctx *pulumi.Context,
	name string, args *WorkflowArgs, opts ...pulumi.ResourceOption) (*Workflow, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	var resource Workflow
	err := ctx.RegisterResource("azure:logicapps/workflow:Workflow", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetWorkflow gets an existing Workflow resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetWorkflow(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *WorkflowState, opts ...pulumi.ResourceOption) (*Workflow, error) {
	var resource Workflow
	err := ctx.ReadResource("azure:logicapps/workflow:Workflow", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Workflow resources.
type workflowState struct {
	// The Access Endpoint for the Logic App Workflow.
	AccessEndpoint *string `pulumi:"accessEndpoint"`
	// The list of access endpoint ip addresses of connector.
	ConnectorEndpointIpAddresses []string `pulumi:"connectorEndpointIpAddresses"`
	// The list of outgoing ip addresses of connector.
	ConnectorOutboundIpAddresses []string `pulumi:"connectorOutboundIpAddresses"`
	// The ID of the Integration Service Environment to which this Logic App Workflow belongs.  Changing this forces a new Logic App Workflow to be created.
	IntegrationServiceEnvironmentId *string `pulumi:"integrationServiceEnvironmentId"`
	// Specifies the supported Azure location where the Logic App Workflow exists. Changing this forces a new resource to be created.
	Location *string `pulumi:"location"`
	// The ID of the integration account linked by this Logic App Workflow.
	LogicAppIntegrationAccountId *string `pulumi:"logicAppIntegrationAccountId"`
	// Specifies the name of the Logic App Workflow. Changing this forces a new resource to be created.
	Name *string `pulumi:"name"`
	// A map of Key-Value pairs.
	Parameters map[string]string `pulumi:"parameters"`
	// The name of the Resource Group in which the Logic App Workflow should be created. Changing this forces a new resource to be created.
	ResourceGroupName *string `pulumi:"resourceGroupName"`
	// A mapping of tags to assign to the resource.
	Tags map[string]string `pulumi:"tags"`
	// The list of access endpoint ip addresses of workflow.
	WorkflowEndpointIpAddresses []string `pulumi:"workflowEndpointIpAddresses"`
	// The list of outgoing ip addresses of workflow.
	WorkflowOutboundIpAddresses []string `pulumi:"workflowOutboundIpAddresses"`
	// Specifies a map of Key-Value pairs of the Parameter Definitions to use for this Logic App Workflow. The key is the parameter name, and the value is a json encoded string of the parameter definition (see: https://docs.microsoft.com/en-us/azure/logic-apps/logic-apps-workflow-definition-language#parameters).
	WorkflowParameters map[string]string `pulumi:"workflowParameters"`
	// Specifies the Schema to use for this Logic App Workflow. Defaults to `https://schema.management.azure.com/providers/Microsoft.Logic/schemas/2016-06-01/workflowdefinition.json#`. Changing this forces a new resource to be created.
	WorkflowSchema *string `pulumi:"workflowSchema"`
	// Specifies the version of the Schema used for this Logic App Workflow. Defaults to `1.0.0.0`. Changing this forces a new resource to be created.
	WorkflowVersion *string `pulumi:"workflowVersion"`
}

type WorkflowState struct {
	// The Access Endpoint for the Logic App Workflow.
	AccessEndpoint pulumi.StringPtrInput
	// The list of access endpoint ip addresses of connector.
	ConnectorEndpointIpAddresses pulumi.StringArrayInput
	// The list of outgoing ip addresses of connector.
	ConnectorOutboundIpAddresses pulumi.StringArrayInput
	// The ID of the Integration Service Environment to which this Logic App Workflow belongs.  Changing this forces a new Logic App Workflow to be created.
	IntegrationServiceEnvironmentId pulumi.StringPtrInput
	// Specifies the supported Azure location where the Logic App Workflow exists. Changing this forces a new resource to be created.
	Location pulumi.StringPtrInput
	// The ID of the integration account linked by this Logic App Workflow.
	LogicAppIntegrationAccountId pulumi.StringPtrInput
	// Specifies the name of the Logic App Workflow. Changing this forces a new resource to be created.
	Name pulumi.StringPtrInput
	// A map of Key-Value pairs.
	Parameters pulumi.StringMapInput
	// The name of the Resource Group in which the Logic App Workflow should be created. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringPtrInput
	// A mapping of tags to assign to the resource.
	Tags pulumi.StringMapInput
	// The list of access endpoint ip addresses of workflow.
	WorkflowEndpointIpAddresses pulumi.StringArrayInput
	// The list of outgoing ip addresses of workflow.
	WorkflowOutboundIpAddresses pulumi.StringArrayInput
	// Specifies a map of Key-Value pairs of the Parameter Definitions to use for this Logic App Workflow. The key is the parameter name, and the value is a json encoded string of the parameter definition (see: https://docs.microsoft.com/en-us/azure/logic-apps/logic-apps-workflow-definition-language#parameters).
	WorkflowParameters pulumi.StringMapInput
	// Specifies the Schema to use for this Logic App Workflow. Defaults to `https://schema.management.azure.com/providers/Microsoft.Logic/schemas/2016-06-01/workflowdefinition.json#`. Changing this forces a new resource to be created.
	WorkflowSchema pulumi.StringPtrInput
	// Specifies the version of the Schema used for this Logic App Workflow. Defaults to `1.0.0.0`. Changing this forces a new resource to be created.
	WorkflowVersion pulumi.StringPtrInput
}

func (WorkflowState) ElementType() reflect.Type {
	return reflect.TypeOf((*workflowState)(nil)).Elem()
}

type workflowArgs struct {
	// The ID of the Integration Service Environment to which this Logic App Workflow belongs.  Changing this forces a new Logic App Workflow to be created.
	IntegrationServiceEnvironmentId *string `pulumi:"integrationServiceEnvironmentId"`
	// Specifies the supported Azure location where the Logic App Workflow exists. Changing this forces a new resource to be created.
	Location *string `pulumi:"location"`
	// The ID of the integration account linked by this Logic App Workflow.
	LogicAppIntegrationAccountId *string `pulumi:"logicAppIntegrationAccountId"`
	// Specifies the name of the Logic App Workflow. Changing this forces a new resource to be created.
	Name *string `pulumi:"name"`
	// A map of Key-Value pairs.
	Parameters map[string]string `pulumi:"parameters"`
	// The name of the Resource Group in which the Logic App Workflow should be created. Changing this forces a new resource to be created.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// A mapping of tags to assign to the resource.
	Tags map[string]string `pulumi:"tags"`
	// Specifies a map of Key-Value pairs of the Parameter Definitions to use for this Logic App Workflow. The key is the parameter name, and the value is a json encoded string of the parameter definition (see: https://docs.microsoft.com/en-us/azure/logic-apps/logic-apps-workflow-definition-language#parameters).
	WorkflowParameters map[string]string `pulumi:"workflowParameters"`
	// Specifies the Schema to use for this Logic App Workflow. Defaults to `https://schema.management.azure.com/providers/Microsoft.Logic/schemas/2016-06-01/workflowdefinition.json#`. Changing this forces a new resource to be created.
	WorkflowSchema *string `pulumi:"workflowSchema"`
	// Specifies the version of the Schema used for this Logic App Workflow. Defaults to `1.0.0.0`. Changing this forces a new resource to be created.
	WorkflowVersion *string `pulumi:"workflowVersion"`
}

// The set of arguments for constructing a Workflow resource.
type WorkflowArgs struct {
	// The ID of the Integration Service Environment to which this Logic App Workflow belongs.  Changing this forces a new Logic App Workflow to be created.
	IntegrationServiceEnvironmentId pulumi.StringPtrInput
	// Specifies the supported Azure location where the Logic App Workflow exists. Changing this forces a new resource to be created.
	Location pulumi.StringPtrInput
	// The ID of the integration account linked by this Logic App Workflow.
	LogicAppIntegrationAccountId pulumi.StringPtrInput
	// Specifies the name of the Logic App Workflow. Changing this forces a new resource to be created.
	Name pulumi.StringPtrInput
	// A map of Key-Value pairs.
	Parameters pulumi.StringMapInput
	// The name of the Resource Group in which the Logic App Workflow should be created. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringInput
	// A mapping of tags to assign to the resource.
	Tags pulumi.StringMapInput
	// Specifies a map of Key-Value pairs of the Parameter Definitions to use for this Logic App Workflow. The key is the parameter name, and the value is a json encoded string of the parameter definition (see: https://docs.microsoft.com/en-us/azure/logic-apps/logic-apps-workflow-definition-language#parameters).
	WorkflowParameters pulumi.StringMapInput
	// Specifies the Schema to use for this Logic App Workflow. Defaults to `https://schema.management.azure.com/providers/Microsoft.Logic/schemas/2016-06-01/workflowdefinition.json#`. Changing this forces a new resource to be created.
	WorkflowSchema pulumi.StringPtrInput
	// Specifies the version of the Schema used for this Logic App Workflow. Defaults to `1.0.0.0`. Changing this forces a new resource to be created.
	WorkflowVersion pulumi.StringPtrInput
}

func (WorkflowArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*workflowArgs)(nil)).Elem()
}

type WorkflowInput interface {
	pulumi.Input

	ToWorkflowOutput() WorkflowOutput
	ToWorkflowOutputWithContext(ctx context.Context) WorkflowOutput
}

func (*Workflow) ElementType() reflect.Type {
	return reflect.TypeOf((*Workflow)(nil))
}

func (i *Workflow) ToWorkflowOutput() WorkflowOutput {
	return i.ToWorkflowOutputWithContext(context.Background())
}

func (i *Workflow) ToWorkflowOutputWithContext(ctx context.Context) WorkflowOutput {
	return pulumi.ToOutputWithContext(ctx, i).(WorkflowOutput)
}

func (i *Workflow) ToWorkflowPtrOutput() WorkflowPtrOutput {
	return i.ToWorkflowPtrOutputWithContext(context.Background())
}

func (i *Workflow) ToWorkflowPtrOutputWithContext(ctx context.Context) WorkflowPtrOutput {
	return pulumi.ToOutputWithContext(ctx, i).(WorkflowPtrOutput)
}

type WorkflowPtrInput interface {
	pulumi.Input

	ToWorkflowPtrOutput() WorkflowPtrOutput
	ToWorkflowPtrOutputWithContext(ctx context.Context) WorkflowPtrOutput
}

type workflowPtrType WorkflowArgs

func (*workflowPtrType) ElementType() reflect.Type {
	return reflect.TypeOf((**Workflow)(nil))
}

func (i *workflowPtrType) ToWorkflowPtrOutput() WorkflowPtrOutput {
	return i.ToWorkflowPtrOutputWithContext(context.Background())
}

func (i *workflowPtrType) ToWorkflowPtrOutputWithContext(ctx context.Context) WorkflowPtrOutput {
	return pulumi.ToOutputWithContext(ctx, i).(WorkflowPtrOutput)
}

// WorkflowArrayInput is an input type that accepts WorkflowArray and WorkflowArrayOutput values.
// You can construct a concrete instance of `WorkflowArrayInput` via:
//
//          WorkflowArray{ WorkflowArgs{...} }
type WorkflowArrayInput interface {
	pulumi.Input

	ToWorkflowArrayOutput() WorkflowArrayOutput
	ToWorkflowArrayOutputWithContext(context.Context) WorkflowArrayOutput
}

type WorkflowArray []WorkflowInput

func (WorkflowArray) ElementType() reflect.Type {
	return reflect.TypeOf(([]*Workflow)(nil))
}

func (i WorkflowArray) ToWorkflowArrayOutput() WorkflowArrayOutput {
	return i.ToWorkflowArrayOutputWithContext(context.Background())
}

func (i WorkflowArray) ToWorkflowArrayOutputWithContext(ctx context.Context) WorkflowArrayOutput {
	return pulumi.ToOutputWithContext(ctx, i).(WorkflowArrayOutput)
}

// WorkflowMapInput is an input type that accepts WorkflowMap and WorkflowMapOutput values.
// You can construct a concrete instance of `WorkflowMapInput` via:
//
//          WorkflowMap{ "key": WorkflowArgs{...} }
type WorkflowMapInput interface {
	pulumi.Input

	ToWorkflowMapOutput() WorkflowMapOutput
	ToWorkflowMapOutputWithContext(context.Context) WorkflowMapOutput
}

type WorkflowMap map[string]WorkflowInput

func (WorkflowMap) ElementType() reflect.Type {
	return reflect.TypeOf((map[string]*Workflow)(nil))
}

func (i WorkflowMap) ToWorkflowMapOutput() WorkflowMapOutput {
	return i.ToWorkflowMapOutputWithContext(context.Background())
}

func (i WorkflowMap) ToWorkflowMapOutputWithContext(ctx context.Context) WorkflowMapOutput {
	return pulumi.ToOutputWithContext(ctx, i).(WorkflowMapOutput)
}

type WorkflowOutput struct {
	*pulumi.OutputState
}

func (WorkflowOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*Workflow)(nil))
}

func (o WorkflowOutput) ToWorkflowOutput() WorkflowOutput {
	return o
}

func (o WorkflowOutput) ToWorkflowOutputWithContext(ctx context.Context) WorkflowOutput {
	return o
}

func (o WorkflowOutput) ToWorkflowPtrOutput() WorkflowPtrOutput {
	return o.ToWorkflowPtrOutputWithContext(context.Background())
}

func (o WorkflowOutput) ToWorkflowPtrOutputWithContext(ctx context.Context) WorkflowPtrOutput {
	return o.ApplyT(func(v Workflow) *Workflow {
		return &v
	}).(WorkflowPtrOutput)
}

type WorkflowPtrOutput struct {
	*pulumi.OutputState
}

func (WorkflowPtrOutput) ElementType() reflect.Type {
	return reflect.TypeOf((**Workflow)(nil))
}

func (o WorkflowPtrOutput) ToWorkflowPtrOutput() WorkflowPtrOutput {
	return o
}

func (o WorkflowPtrOutput) ToWorkflowPtrOutputWithContext(ctx context.Context) WorkflowPtrOutput {
	return o
}

type WorkflowArrayOutput struct{ *pulumi.OutputState }

func (WorkflowArrayOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*[]Workflow)(nil))
}

func (o WorkflowArrayOutput) ToWorkflowArrayOutput() WorkflowArrayOutput {
	return o
}

func (o WorkflowArrayOutput) ToWorkflowArrayOutputWithContext(ctx context.Context) WorkflowArrayOutput {
	return o
}

func (o WorkflowArrayOutput) Index(i pulumi.IntInput) WorkflowOutput {
	return pulumi.All(o, i).ApplyT(func(vs []interface{}) Workflow {
		return vs[0].([]Workflow)[vs[1].(int)]
	}).(WorkflowOutput)
}

type WorkflowMapOutput struct{ *pulumi.OutputState }

func (WorkflowMapOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]Workflow)(nil))
}

func (o WorkflowMapOutput) ToWorkflowMapOutput() WorkflowMapOutput {
	return o
}

func (o WorkflowMapOutput) ToWorkflowMapOutputWithContext(ctx context.Context) WorkflowMapOutput {
	return o
}

func (o WorkflowMapOutput) MapIndex(k pulumi.StringInput) WorkflowOutput {
	return pulumi.All(o, k).ApplyT(func(vs []interface{}) Workflow {
		return vs[0].(map[string]Workflow)[vs[1].(string)]
	}).(WorkflowOutput)
}

func init() {
	pulumi.RegisterOutputType(WorkflowOutput{})
	pulumi.RegisterOutputType(WorkflowPtrOutput{})
	pulumi.RegisterOutputType(WorkflowArrayOutput{})
	pulumi.RegisterOutputType(WorkflowMapOutput{})
}
