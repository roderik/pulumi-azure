// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package iot

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

// Manages an IotHub ServiceBus Queue Endpoint
//
// > **NOTE:** Endpoints can be defined either directly on the `iot.IoTHub` resource, or using the `azurerm_iothub_endpoint_*` resources - but the two ways of defining the endpoints cannot be used together. If both are used against the same IoTHub, spurious changes will occur. Also, defining a `azurerm_iothub_endpoint_*` resource and another endpoint of a different type directly on the `iot.IoTHub` resource is not supported.
//
// ## Example Usage
//
// ```go
// package main
//
// import (
// 	"github.com/pulumi/pulumi-azure/sdk/v4/go/azure/core"
// 	"github.com/pulumi/pulumi-azure/sdk/v4/go/azure/iot"
// 	"github.com/pulumi/pulumi-azure/sdk/v4/go/azure/servicebus"
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
// 		exampleNamespace, err := servicebus.NewNamespace(ctx, "exampleNamespace", &servicebus.NamespaceArgs{
// 			Location:          exampleResourceGroup.Location,
// 			ResourceGroupName: exampleResourceGroup.Name,
// 			Sku:               pulumi.String("Standard"),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		exampleQueue, err := servicebus.NewQueue(ctx, "exampleQueue", &servicebus.QueueArgs{
// 			ResourceGroupName:  exampleResourceGroup.Name,
// 			NamespaceName:      exampleNamespace.Name,
// 			EnablePartitioning: pulumi.Bool(true),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		exampleQueueAuthorizationRule, err := servicebus.NewQueueAuthorizationRule(ctx, "exampleQueueAuthorizationRule", &servicebus.QueueAuthorizationRuleArgs{
// 			NamespaceName:     exampleNamespace.Name,
// 			QueueName:         exampleQueue.Name,
// 			ResourceGroupName: exampleResourceGroup.Name,
// 			Listen:            pulumi.Bool(false),
// 			Send:              pulumi.Bool(true),
// 			Manage:            pulumi.Bool(false),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		exampleIoTHub, err := iot.NewIoTHub(ctx, "exampleIoTHub", &iot.IoTHubArgs{
// 			ResourceGroupName: exampleResourceGroup.Name,
// 			Location:          exampleResourceGroup.Location,
// 			Sku: &iot.IoTHubSkuArgs{
// 				Name:     pulumi.String("B1"),
// 				Tier:     "Basic",
// 				Capacity: pulumi.Int(1),
// 			},
// 			Tags: pulumi.StringMap{
// 				"purpose": pulumi.String("example"),
// 			},
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		_, err = iot.NewEndpointServicebusQueue(ctx, "exampleEndpointServicebusQueue", &iot.EndpointServicebusQueueArgs{
// 			ResourceGroupName: exampleResourceGroup.Name,
// 			IothubName:        exampleIoTHub.Name,
// 			ConnectionString:  exampleQueueAuthorizationRule.PrimaryConnectionString,
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
// IoTHub ServiceBus Queue Endpoint can be imported using the `resource id`, e.g.
//
// ```sh
//  $ pulumi import azure:iot/endpointServicebusQueue:EndpointServicebusQueue servicebus_queue1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Devices/IotHubs/hub1/Endpoints/servicebusqueue_endpoint1
// ```
type EndpointServicebusQueue struct {
	pulumi.CustomResourceState

	// The connection string for the endpoint.
	ConnectionString pulumi.StringOutput `pulumi:"connectionString"`
	IothubName       pulumi.StringOutput `pulumi:"iothubName"`
	// The name of the endpoint. The name must be unique across endpoint types. The following names are reserved:  `events`, `operationsMonitoringEvents`, `fileNotifications` and `$default`.
	Name              pulumi.StringOutput `pulumi:"name"`
	ResourceGroupName pulumi.StringOutput `pulumi:"resourceGroupName"`
}

// NewEndpointServicebusQueue registers a new resource with the given unique name, arguments, and options.
func NewEndpointServicebusQueue(ctx *pulumi.Context,
	name string, args *EndpointServicebusQueueArgs, opts ...pulumi.ResourceOption) (*EndpointServicebusQueue, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.ConnectionString == nil {
		return nil, errors.New("invalid value for required argument 'ConnectionString'")
	}
	if args.IothubName == nil {
		return nil, errors.New("invalid value for required argument 'IothubName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	var resource EndpointServicebusQueue
	err := ctx.RegisterResource("azure:iot/endpointServicebusQueue:EndpointServicebusQueue", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetEndpointServicebusQueue gets an existing EndpointServicebusQueue resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetEndpointServicebusQueue(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *EndpointServicebusQueueState, opts ...pulumi.ResourceOption) (*EndpointServicebusQueue, error) {
	var resource EndpointServicebusQueue
	err := ctx.ReadResource("azure:iot/endpointServicebusQueue:EndpointServicebusQueue", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering EndpointServicebusQueue resources.
type endpointServicebusQueueState struct {
	// The connection string for the endpoint.
	ConnectionString *string `pulumi:"connectionString"`
	IothubName       *string `pulumi:"iothubName"`
	// The name of the endpoint. The name must be unique across endpoint types. The following names are reserved:  `events`, `operationsMonitoringEvents`, `fileNotifications` and `$default`.
	Name              *string `pulumi:"name"`
	ResourceGroupName *string `pulumi:"resourceGroupName"`
}

type EndpointServicebusQueueState struct {
	// The connection string for the endpoint.
	ConnectionString pulumi.StringPtrInput
	IothubName       pulumi.StringPtrInput
	// The name of the endpoint. The name must be unique across endpoint types. The following names are reserved:  `events`, `operationsMonitoringEvents`, `fileNotifications` and `$default`.
	Name              pulumi.StringPtrInput
	ResourceGroupName pulumi.StringPtrInput
}

func (EndpointServicebusQueueState) ElementType() reflect.Type {
	return reflect.TypeOf((*endpointServicebusQueueState)(nil)).Elem()
}

type endpointServicebusQueueArgs struct {
	// The connection string for the endpoint.
	ConnectionString string `pulumi:"connectionString"`
	IothubName       string `pulumi:"iothubName"`
	// The name of the endpoint. The name must be unique across endpoint types. The following names are reserved:  `events`, `operationsMonitoringEvents`, `fileNotifications` and `$default`.
	Name              *string `pulumi:"name"`
	ResourceGroupName string  `pulumi:"resourceGroupName"`
}

// The set of arguments for constructing a EndpointServicebusQueue resource.
type EndpointServicebusQueueArgs struct {
	// The connection string for the endpoint.
	ConnectionString pulumi.StringInput
	IothubName       pulumi.StringInput
	// The name of the endpoint. The name must be unique across endpoint types. The following names are reserved:  `events`, `operationsMonitoringEvents`, `fileNotifications` and `$default`.
	Name              pulumi.StringPtrInput
	ResourceGroupName pulumi.StringInput
}

func (EndpointServicebusQueueArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*endpointServicebusQueueArgs)(nil)).Elem()
}

type EndpointServicebusQueueInput interface {
	pulumi.Input

	ToEndpointServicebusQueueOutput() EndpointServicebusQueueOutput
	ToEndpointServicebusQueueOutputWithContext(ctx context.Context) EndpointServicebusQueueOutput
}

func (*EndpointServicebusQueue) ElementType() reflect.Type {
	return reflect.TypeOf((*EndpointServicebusQueue)(nil))
}

func (i *EndpointServicebusQueue) ToEndpointServicebusQueueOutput() EndpointServicebusQueueOutput {
	return i.ToEndpointServicebusQueueOutputWithContext(context.Background())
}

func (i *EndpointServicebusQueue) ToEndpointServicebusQueueOutputWithContext(ctx context.Context) EndpointServicebusQueueOutput {
	return pulumi.ToOutputWithContext(ctx, i).(EndpointServicebusQueueOutput)
}

func (i *EndpointServicebusQueue) ToEndpointServicebusQueuePtrOutput() EndpointServicebusQueuePtrOutput {
	return i.ToEndpointServicebusQueuePtrOutputWithContext(context.Background())
}

func (i *EndpointServicebusQueue) ToEndpointServicebusQueuePtrOutputWithContext(ctx context.Context) EndpointServicebusQueuePtrOutput {
	return pulumi.ToOutputWithContext(ctx, i).(EndpointServicebusQueuePtrOutput)
}

type EndpointServicebusQueuePtrInput interface {
	pulumi.Input

	ToEndpointServicebusQueuePtrOutput() EndpointServicebusQueuePtrOutput
	ToEndpointServicebusQueuePtrOutputWithContext(ctx context.Context) EndpointServicebusQueuePtrOutput
}

type endpointServicebusQueuePtrType EndpointServicebusQueueArgs

func (*endpointServicebusQueuePtrType) ElementType() reflect.Type {
	return reflect.TypeOf((**EndpointServicebusQueue)(nil))
}

func (i *endpointServicebusQueuePtrType) ToEndpointServicebusQueuePtrOutput() EndpointServicebusQueuePtrOutput {
	return i.ToEndpointServicebusQueuePtrOutputWithContext(context.Background())
}

func (i *endpointServicebusQueuePtrType) ToEndpointServicebusQueuePtrOutputWithContext(ctx context.Context) EndpointServicebusQueuePtrOutput {
	return pulumi.ToOutputWithContext(ctx, i).(EndpointServicebusQueuePtrOutput)
}

// EndpointServicebusQueueArrayInput is an input type that accepts EndpointServicebusQueueArray and EndpointServicebusQueueArrayOutput values.
// You can construct a concrete instance of `EndpointServicebusQueueArrayInput` via:
//
//          EndpointServicebusQueueArray{ EndpointServicebusQueueArgs{...} }
type EndpointServicebusQueueArrayInput interface {
	pulumi.Input

	ToEndpointServicebusQueueArrayOutput() EndpointServicebusQueueArrayOutput
	ToEndpointServicebusQueueArrayOutputWithContext(context.Context) EndpointServicebusQueueArrayOutput
}

type EndpointServicebusQueueArray []EndpointServicebusQueueInput

func (EndpointServicebusQueueArray) ElementType() reflect.Type {
	return reflect.TypeOf(([]*EndpointServicebusQueue)(nil))
}

func (i EndpointServicebusQueueArray) ToEndpointServicebusQueueArrayOutput() EndpointServicebusQueueArrayOutput {
	return i.ToEndpointServicebusQueueArrayOutputWithContext(context.Background())
}

func (i EndpointServicebusQueueArray) ToEndpointServicebusQueueArrayOutputWithContext(ctx context.Context) EndpointServicebusQueueArrayOutput {
	return pulumi.ToOutputWithContext(ctx, i).(EndpointServicebusQueueArrayOutput)
}

// EndpointServicebusQueueMapInput is an input type that accepts EndpointServicebusQueueMap and EndpointServicebusQueueMapOutput values.
// You can construct a concrete instance of `EndpointServicebusQueueMapInput` via:
//
//          EndpointServicebusQueueMap{ "key": EndpointServicebusQueueArgs{...} }
type EndpointServicebusQueueMapInput interface {
	pulumi.Input

	ToEndpointServicebusQueueMapOutput() EndpointServicebusQueueMapOutput
	ToEndpointServicebusQueueMapOutputWithContext(context.Context) EndpointServicebusQueueMapOutput
}

type EndpointServicebusQueueMap map[string]EndpointServicebusQueueInput

func (EndpointServicebusQueueMap) ElementType() reflect.Type {
	return reflect.TypeOf((map[string]*EndpointServicebusQueue)(nil))
}

func (i EndpointServicebusQueueMap) ToEndpointServicebusQueueMapOutput() EndpointServicebusQueueMapOutput {
	return i.ToEndpointServicebusQueueMapOutputWithContext(context.Background())
}

func (i EndpointServicebusQueueMap) ToEndpointServicebusQueueMapOutputWithContext(ctx context.Context) EndpointServicebusQueueMapOutput {
	return pulumi.ToOutputWithContext(ctx, i).(EndpointServicebusQueueMapOutput)
}

type EndpointServicebusQueueOutput struct {
	*pulumi.OutputState
}

func (EndpointServicebusQueueOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*EndpointServicebusQueue)(nil))
}

func (o EndpointServicebusQueueOutput) ToEndpointServicebusQueueOutput() EndpointServicebusQueueOutput {
	return o
}

func (o EndpointServicebusQueueOutput) ToEndpointServicebusQueueOutputWithContext(ctx context.Context) EndpointServicebusQueueOutput {
	return o
}

func (o EndpointServicebusQueueOutput) ToEndpointServicebusQueuePtrOutput() EndpointServicebusQueuePtrOutput {
	return o.ToEndpointServicebusQueuePtrOutputWithContext(context.Background())
}

func (o EndpointServicebusQueueOutput) ToEndpointServicebusQueuePtrOutputWithContext(ctx context.Context) EndpointServicebusQueuePtrOutput {
	return o.ApplyT(func(v EndpointServicebusQueue) *EndpointServicebusQueue {
		return &v
	}).(EndpointServicebusQueuePtrOutput)
}

type EndpointServicebusQueuePtrOutput struct {
	*pulumi.OutputState
}

func (EndpointServicebusQueuePtrOutput) ElementType() reflect.Type {
	return reflect.TypeOf((**EndpointServicebusQueue)(nil))
}

func (o EndpointServicebusQueuePtrOutput) ToEndpointServicebusQueuePtrOutput() EndpointServicebusQueuePtrOutput {
	return o
}

func (o EndpointServicebusQueuePtrOutput) ToEndpointServicebusQueuePtrOutputWithContext(ctx context.Context) EndpointServicebusQueuePtrOutput {
	return o
}

type EndpointServicebusQueueArrayOutput struct{ *pulumi.OutputState }

func (EndpointServicebusQueueArrayOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*[]EndpointServicebusQueue)(nil))
}

func (o EndpointServicebusQueueArrayOutput) ToEndpointServicebusQueueArrayOutput() EndpointServicebusQueueArrayOutput {
	return o
}

func (o EndpointServicebusQueueArrayOutput) ToEndpointServicebusQueueArrayOutputWithContext(ctx context.Context) EndpointServicebusQueueArrayOutput {
	return o
}

func (o EndpointServicebusQueueArrayOutput) Index(i pulumi.IntInput) EndpointServicebusQueueOutput {
	return pulumi.All(o, i).ApplyT(func(vs []interface{}) EndpointServicebusQueue {
		return vs[0].([]EndpointServicebusQueue)[vs[1].(int)]
	}).(EndpointServicebusQueueOutput)
}

type EndpointServicebusQueueMapOutput struct{ *pulumi.OutputState }

func (EndpointServicebusQueueMapOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]EndpointServicebusQueue)(nil))
}

func (o EndpointServicebusQueueMapOutput) ToEndpointServicebusQueueMapOutput() EndpointServicebusQueueMapOutput {
	return o
}

func (o EndpointServicebusQueueMapOutput) ToEndpointServicebusQueueMapOutputWithContext(ctx context.Context) EndpointServicebusQueueMapOutput {
	return o
}

func (o EndpointServicebusQueueMapOutput) MapIndex(k pulumi.StringInput) EndpointServicebusQueueOutput {
	return pulumi.All(o, k).ApplyT(func(vs []interface{}) EndpointServicebusQueue {
		return vs[0].(map[string]EndpointServicebusQueue)[vs[1].(string)]
	}).(EndpointServicebusQueueOutput)
}

func init() {
	pulumi.RegisterOutputType(EndpointServicebusQueueOutput{})
	pulumi.RegisterOutputType(EndpointServicebusQueuePtrOutput{})
	pulumi.RegisterOutputType(EndpointServicebusQueueArrayOutput{})
	pulumi.RegisterOutputType(EndpointServicebusQueueMapOutput{})
}
