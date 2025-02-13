# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union, overload
from .. import _utilities
from . import outputs
from ._inputs import *

__all__ = ['StoreArgs', 'Store']

@pulumi.input_type
class StoreArgs:
    def __init__(__self__, *,
                 resource_group_name: pulumi.Input[str],
                 encryption_state: Optional[pulumi.Input[str]] = None,
                 encryption_type: Optional[pulumi.Input[str]] = None,
                 firewall_allow_azure_ips: Optional[pulumi.Input[str]] = None,
                 firewall_state: Optional[pulumi.Input[str]] = None,
                 identity: Optional[pulumi.Input['StoreIdentityArgs']] = None,
                 location: Optional[pulumi.Input[str]] = None,
                 name: Optional[pulumi.Input[str]] = None,
                 tags: Optional[pulumi.Input[Mapping[str, pulumi.Input[str]]]] = None,
                 tier: Optional[pulumi.Input[str]] = None):
        """
        The set of arguments for constructing a Store resource.
        :param pulumi.Input[str] resource_group_name: The name of the resource group in which to create the Data Lake Store.
        :param pulumi.Input[str] encryption_state: Is Encryption enabled on this Data Lake Store Account? Possible values are `Enabled` or `Disabled`. Defaults to `Enabled`.
        :param pulumi.Input[str] encryption_type: The Encryption Type used for this Data Lake Store Account. Currently can be set to `ServiceManaged` when `encryption_state` is `Enabled` - and must be a blank string when it's Disabled.
        :param pulumi.Input[str] firewall_allow_azure_ips: are Azure Service IP's allowed through the firewall? Possible values are `Enabled` and `Disabled`. Defaults to `Enabled.`
        :param pulumi.Input[str] firewall_state: the state of the Firewall. Possible values are `Enabled` and `Disabled`. Defaults to `Enabled.`
        :param pulumi.Input['StoreIdentityArgs'] identity: An `identity` block defined below.
        :param pulumi.Input[str] location: Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
        :param pulumi.Input[str] name: Specifies the name of the Data Lake Store. Changing this forces a new resource to be created. Has to be between 3 to 24 characters.
        :param pulumi.Input[Mapping[str, pulumi.Input[str]]] tags: A mapping of tags to assign to the resource.
        :param pulumi.Input[str] tier: The monthly commitment tier for Data Lake Store. Accepted values are `Consumption`, `Commitment_1TB`, `Commitment_10TB`, `Commitment_100TB`, `Commitment_500TB`, `Commitment_1PB` or `Commitment_5PB`.
        """
        pulumi.set(__self__, "resource_group_name", resource_group_name)
        if encryption_state is not None:
            pulumi.set(__self__, "encryption_state", encryption_state)
        if encryption_type is not None:
            pulumi.set(__self__, "encryption_type", encryption_type)
        if firewall_allow_azure_ips is not None:
            pulumi.set(__self__, "firewall_allow_azure_ips", firewall_allow_azure_ips)
        if firewall_state is not None:
            pulumi.set(__self__, "firewall_state", firewall_state)
        if identity is not None:
            pulumi.set(__self__, "identity", identity)
        if location is not None:
            pulumi.set(__self__, "location", location)
        if name is not None:
            pulumi.set(__self__, "name", name)
        if tags is not None:
            pulumi.set(__self__, "tags", tags)
        if tier is not None:
            pulumi.set(__self__, "tier", tier)

    @property
    @pulumi.getter(name="resourceGroupName")
    def resource_group_name(self) -> pulumi.Input[str]:
        """
        The name of the resource group in which to create the Data Lake Store.
        """
        return pulumi.get(self, "resource_group_name")

    @resource_group_name.setter
    def resource_group_name(self, value: pulumi.Input[str]):
        pulumi.set(self, "resource_group_name", value)

    @property
    @pulumi.getter(name="encryptionState")
    def encryption_state(self) -> Optional[pulumi.Input[str]]:
        """
        Is Encryption enabled on this Data Lake Store Account? Possible values are `Enabled` or `Disabled`. Defaults to `Enabled`.
        """
        return pulumi.get(self, "encryption_state")

    @encryption_state.setter
    def encryption_state(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "encryption_state", value)

    @property
    @pulumi.getter(name="encryptionType")
    def encryption_type(self) -> Optional[pulumi.Input[str]]:
        """
        The Encryption Type used for this Data Lake Store Account. Currently can be set to `ServiceManaged` when `encryption_state` is `Enabled` - and must be a blank string when it's Disabled.
        """
        return pulumi.get(self, "encryption_type")

    @encryption_type.setter
    def encryption_type(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "encryption_type", value)

    @property
    @pulumi.getter(name="firewallAllowAzureIps")
    def firewall_allow_azure_ips(self) -> Optional[pulumi.Input[str]]:
        """
        are Azure Service IP's allowed through the firewall? Possible values are `Enabled` and `Disabled`. Defaults to `Enabled.`
        """
        return pulumi.get(self, "firewall_allow_azure_ips")

    @firewall_allow_azure_ips.setter
    def firewall_allow_azure_ips(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "firewall_allow_azure_ips", value)

    @property
    @pulumi.getter(name="firewallState")
    def firewall_state(self) -> Optional[pulumi.Input[str]]:
        """
        the state of the Firewall. Possible values are `Enabled` and `Disabled`. Defaults to `Enabled.`
        """
        return pulumi.get(self, "firewall_state")

    @firewall_state.setter
    def firewall_state(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "firewall_state", value)

    @property
    @pulumi.getter
    def identity(self) -> Optional[pulumi.Input['StoreIdentityArgs']]:
        """
        An `identity` block defined below.
        """
        return pulumi.get(self, "identity")

    @identity.setter
    def identity(self, value: Optional[pulumi.Input['StoreIdentityArgs']]):
        pulumi.set(self, "identity", value)

    @property
    @pulumi.getter
    def location(self) -> Optional[pulumi.Input[str]]:
        """
        Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
        """
        return pulumi.get(self, "location")

    @location.setter
    def location(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "location", value)

    @property
    @pulumi.getter
    def name(self) -> Optional[pulumi.Input[str]]:
        """
        Specifies the name of the Data Lake Store. Changing this forces a new resource to be created. Has to be between 3 to 24 characters.
        """
        return pulumi.get(self, "name")

    @name.setter
    def name(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "name", value)

    @property
    @pulumi.getter
    def tags(self) -> Optional[pulumi.Input[Mapping[str, pulumi.Input[str]]]]:
        """
        A mapping of tags to assign to the resource.
        """
        return pulumi.get(self, "tags")

    @tags.setter
    def tags(self, value: Optional[pulumi.Input[Mapping[str, pulumi.Input[str]]]]):
        pulumi.set(self, "tags", value)

    @property
    @pulumi.getter
    def tier(self) -> Optional[pulumi.Input[str]]:
        """
        The monthly commitment tier for Data Lake Store. Accepted values are `Consumption`, `Commitment_1TB`, `Commitment_10TB`, `Commitment_100TB`, `Commitment_500TB`, `Commitment_1PB` or `Commitment_5PB`.
        """
        return pulumi.get(self, "tier")

    @tier.setter
    def tier(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "tier", value)


@pulumi.input_type
class _StoreState:
    def __init__(__self__, *,
                 encryption_state: Optional[pulumi.Input[str]] = None,
                 encryption_type: Optional[pulumi.Input[str]] = None,
                 endpoint: Optional[pulumi.Input[str]] = None,
                 firewall_allow_azure_ips: Optional[pulumi.Input[str]] = None,
                 firewall_state: Optional[pulumi.Input[str]] = None,
                 identity: Optional[pulumi.Input['StoreIdentityArgs']] = None,
                 location: Optional[pulumi.Input[str]] = None,
                 name: Optional[pulumi.Input[str]] = None,
                 resource_group_name: Optional[pulumi.Input[str]] = None,
                 tags: Optional[pulumi.Input[Mapping[str, pulumi.Input[str]]]] = None,
                 tier: Optional[pulumi.Input[str]] = None):
        """
        Input properties used for looking up and filtering Store resources.
        :param pulumi.Input[str] encryption_state: Is Encryption enabled on this Data Lake Store Account? Possible values are `Enabled` or `Disabled`. Defaults to `Enabled`.
        :param pulumi.Input[str] encryption_type: The Encryption Type used for this Data Lake Store Account. Currently can be set to `ServiceManaged` when `encryption_state` is `Enabled` - and must be a blank string when it's Disabled.
        :param pulumi.Input[str] endpoint: The Endpoint for the Data Lake Store.
        :param pulumi.Input[str] firewall_allow_azure_ips: are Azure Service IP's allowed through the firewall? Possible values are `Enabled` and `Disabled`. Defaults to `Enabled.`
        :param pulumi.Input[str] firewall_state: the state of the Firewall. Possible values are `Enabled` and `Disabled`. Defaults to `Enabled.`
        :param pulumi.Input['StoreIdentityArgs'] identity: An `identity` block defined below.
        :param pulumi.Input[str] location: Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
        :param pulumi.Input[str] name: Specifies the name of the Data Lake Store. Changing this forces a new resource to be created. Has to be between 3 to 24 characters.
        :param pulumi.Input[str] resource_group_name: The name of the resource group in which to create the Data Lake Store.
        :param pulumi.Input[Mapping[str, pulumi.Input[str]]] tags: A mapping of tags to assign to the resource.
        :param pulumi.Input[str] tier: The monthly commitment tier for Data Lake Store. Accepted values are `Consumption`, `Commitment_1TB`, `Commitment_10TB`, `Commitment_100TB`, `Commitment_500TB`, `Commitment_1PB` or `Commitment_5PB`.
        """
        if encryption_state is not None:
            pulumi.set(__self__, "encryption_state", encryption_state)
        if encryption_type is not None:
            pulumi.set(__self__, "encryption_type", encryption_type)
        if endpoint is not None:
            pulumi.set(__self__, "endpoint", endpoint)
        if firewall_allow_azure_ips is not None:
            pulumi.set(__self__, "firewall_allow_azure_ips", firewall_allow_azure_ips)
        if firewall_state is not None:
            pulumi.set(__self__, "firewall_state", firewall_state)
        if identity is not None:
            pulumi.set(__self__, "identity", identity)
        if location is not None:
            pulumi.set(__self__, "location", location)
        if name is not None:
            pulumi.set(__self__, "name", name)
        if resource_group_name is not None:
            pulumi.set(__self__, "resource_group_name", resource_group_name)
        if tags is not None:
            pulumi.set(__self__, "tags", tags)
        if tier is not None:
            pulumi.set(__self__, "tier", tier)

    @property
    @pulumi.getter(name="encryptionState")
    def encryption_state(self) -> Optional[pulumi.Input[str]]:
        """
        Is Encryption enabled on this Data Lake Store Account? Possible values are `Enabled` or `Disabled`. Defaults to `Enabled`.
        """
        return pulumi.get(self, "encryption_state")

    @encryption_state.setter
    def encryption_state(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "encryption_state", value)

    @property
    @pulumi.getter(name="encryptionType")
    def encryption_type(self) -> Optional[pulumi.Input[str]]:
        """
        The Encryption Type used for this Data Lake Store Account. Currently can be set to `ServiceManaged` when `encryption_state` is `Enabled` - and must be a blank string when it's Disabled.
        """
        return pulumi.get(self, "encryption_type")

    @encryption_type.setter
    def encryption_type(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "encryption_type", value)

    @property
    @pulumi.getter
    def endpoint(self) -> Optional[pulumi.Input[str]]:
        """
        The Endpoint for the Data Lake Store.
        """
        return pulumi.get(self, "endpoint")

    @endpoint.setter
    def endpoint(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "endpoint", value)

    @property
    @pulumi.getter(name="firewallAllowAzureIps")
    def firewall_allow_azure_ips(self) -> Optional[pulumi.Input[str]]:
        """
        are Azure Service IP's allowed through the firewall? Possible values are `Enabled` and `Disabled`. Defaults to `Enabled.`
        """
        return pulumi.get(self, "firewall_allow_azure_ips")

    @firewall_allow_azure_ips.setter
    def firewall_allow_azure_ips(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "firewall_allow_azure_ips", value)

    @property
    @pulumi.getter(name="firewallState")
    def firewall_state(self) -> Optional[pulumi.Input[str]]:
        """
        the state of the Firewall. Possible values are `Enabled` and `Disabled`. Defaults to `Enabled.`
        """
        return pulumi.get(self, "firewall_state")

    @firewall_state.setter
    def firewall_state(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "firewall_state", value)

    @property
    @pulumi.getter
    def identity(self) -> Optional[pulumi.Input['StoreIdentityArgs']]:
        """
        An `identity` block defined below.
        """
        return pulumi.get(self, "identity")

    @identity.setter
    def identity(self, value: Optional[pulumi.Input['StoreIdentityArgs']]):
        pulumi.set(self, "identity", value)

    @property
    @pulumi.getter
    def location(self) -> Optional[pulumi.Input[str]]:
        """
        Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
        """
        return pulumi.get(self, "location")

    @location.setter
    def location(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "location", value)

    @property
    @pulumi.getter
    def name(self) -> Optional[pulumi.Input[str]]:
        """
        Specifies the name of the Data Lake Store. Changing this forces a new resource to be created. Has to be between 3 to 24 characters.
        """
        return pulumi.get(self, "name")

    @name.setter
    def name(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "name", value)

    @property
    @pulumi.getter(name="resourceGroupName")
    def resource_group_name(self) -> Optional[pulumi.Input[str]]:
        """
        The name of the resource group in which to create the Data Lake Store.
        """
        return pulumi.get(self, "resource_group_name")

    @resource_group_name.setter
    def resource_group_name(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "resource_group_name", value)

    @property
    @pulumi.getter
    def tags(self) -> Optional[pulumi.Input[Mapping[str, pulumi.Input[str]]]]:
        """
        A mapping of tags to assign to the resource.
        """
        return pulumi.get(self, "tags")

    @tags.setter
    def tags(self, value: Optional[pulumi.Input[Mapping[str, pulumi.Input[str]]]]):
        pulumi.set(self, "tags", value)

    @property
    @pulumi.getter
    def tier(self) -> Optional[pulumi.Input[str]]:
        """
        The monthly commitment tier for Data Lake Store. Accepted values are `Consumption`, `Commitment_1TB`, `Commitment_10TB`, `Commitment_100TB`, `Commitment_500TB`, `Commitment_1PB` or `Commitment_5PB`.
        """
        return pulumi.get(self, "tier")

    @tier.setter
    def tier(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "tier", value)


class Store(pulumi.CustomResource):
    @overload
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 encryption_state: Optional[pulumi.Input[str]] = None,
                 encryption_type: Optional[pulumi.Input[str]] = None,
                 firewall_allow_azure_ips: Optional[pulumi.Input[str]] = None,
                 firewall_state: Optional[pulumi.Input[str]] = None,
                 identity: Optional[pulumi.Input[pulumi.InputType['StoreIdentityArgs']]] = None,
                 location: Optional[pulumi.Input[str]] = None,
                 name: Optional[pulumi.Input[str]] = None,
                 resource_group_name: Optional[pulumi.Input[str]] = None,
                 tags: Optional[pulumi.Input[Mapping[str, pulumi.Input[str]]]] = None,
                 tier: Optional[pulumi.Input[str]] = None,
                 __props__=None):
        """
        Manages an Azure Data Lake Store.

        ## Example Usage

        ```python
        import pulumi
        import pulumi_azure as azure

        example_resource_group = azure.core.ResourceGroup("exampleResourceGroup", location="West Europe")
        example_store = azure.datalake.Store("exampleStore",
            resource_group_name=example_resource_group.name,
            location=example_resource_group.location,
            encryption_state="Enabled",
            encryption_type="ServiceManaged")
        ```

        ## Import

        Data Lake Store's can be imported using the `resource id`, e.g.

        ```sh
         $ pulumi import azure:datalake/store:Store example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.DataLakeStore/accounts/mydatalakeaccount
        ```

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] encryption_state: Is Encryption enabled on this Data Lake Store Account? Possible values are `Enabled` or `Disabled`. Defaults to `Enabled`.
        :param pulumi.Input[str] encryption_type: The Encryption Type used for this Data Lake Store Account. Currently can be set to `ServiceManaged` when `encryption_state` is `Enabled` - and must be a blank string when it's Disabled.
        :param pulumi.Input[str] firewall_allow_azure_ips: are Azure Service IP's allowed through the firewall? Possible values are `Enabled` and `Disabled`. Defaults to `Enabled.`
        :param pulumi.Input[str] firewall_state: the state of the Firewall. Possible values are `Enabled` and `Disabled`. Defaults to `Enabled.`
        :param pulumi.Input[pulumi.InputType['StoreIdentityArgs']] identity: An `identity` block defined below.
        :param pulumi.Input[str] location: Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
        :param pulumi.Input[str] name: Specifies the name of the Data Lake Store. Changing this forces a new resource to be created. Has to be between 3 to 24 characters.
        :param pulumi.Input[str] resource_group_name: The name of the resource group in which to create the Data Lake Store.
        :param pulumi.Input[Mapping[str, pulumi.Input[str]]] tags: A mapping of tags to assign to the resource.
        :param pulumi.Input[str] tier: The monthly commitment tier for Data Lake Store. Accepted values are `Consumption`, `Commitment_1TB`, `Commitment_10TB`, `Commitment_100TB`, `Commitment_500TB`, `Commitment_1PB` or `Commitment_5PB`.
        """
        ...
    @overload
    def __init__(__self__,
                 resource_name: str,
                 args: StoreArgs,
                 opts: Optional[pulumi.ResourceOptions] = None):
        """
        Manages an Azure Data Lake Store.

        ## Example Usage

        ```python
        import pulumi
        import pulumi_azure as azure

        example_resource_group = azure.core.ResourceGroup("exampleResourceGroup", location="West Europe")
        example_store = azure.datalake.Store("exampleStore",
            resource_group_name=example_resource_group.name,
            location=example_resource_group.location,
            encryption_state="Enabled",
            encryption_type="ServiceManaged")
        ```

        ## Import

        Data Lake Store's can be imported using the `resource id`, e.g.

        ```sh
         $ pulumi import azure:datalake/store:Store example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.DataLakeStore/accounts/mydatalakeaccount
        ```

        :param str resource_name: The name of the resource.
        :param StoreArgs args: The arguments to use to populate this resource's properties.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        ...
    def __init__(__self__, resource_name: str, *args, **kwargs):
        resource_args, opts = _utilities.get_resource_args_opts(StoreArgs, pulumi.ResourceOptions, *args, **kwargs)
        if resource_args is not None:
            __self__._internal_init(resource_name, opts, **resource_args.__dict__)
        else:
            __self__._internal_init(resource_name, *args, **kwargs)

    def _internal_init(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 encryption_state: Optional[pulumi.Input[str]] = None,
                 encryption_type: Optional[pulumi.Input[str]] = None,
                 firewall_allow_azure_ips: Optional[pulumi.Input[str]] = None,
                 firewall_state: Optional[pulumi.Input[str]] = None,
                 identity: Optional[pulumi.Input[pulumi.InputType['StoreIdentityArgs']]] = None,
                 location: Optional[pulumi.Input[str]] = None,
                 name: Optional[pulumi.Input[str]] = None,
                 resource_group_name: Optional[pulumi.Input[str]] = None,
                 tags: Optional[pulumi.Input[Mapping[str, pulumi.Input[str]]]] = None,
                 tier: Optional[pulumi.Input[str]] = None,
                 __props__=None):
        if opts is None:
            opts = pulumi.ResourceOptions()
        if not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')
        if opts.version is None:
            opts.version = _utilities.get_version()
        if opts.id is None:
            if __props__ is not None:
                raise TypeError('__props__ is only valid when passed in combination with a valid opts.id to get an existing resource')
            __props__ = StoreArgs.__new__(StoreArgs)

            __props__.__dict__["encryption_state"] = encryption_state
            __props__.__dict__["encryption_type"] = encryption_type
            __props__.__dict__["firewall_allow_azure_ips"] = firewall_allow_azure_ips
            __props__.__dict__["firewall_state"] = firewall_state
            __props__.__dict__["identity"] = identity
            __props__.__dict__["location"] = location
            __props__.__dict__["name"] = name
            if resource_group_name is None and not opts.urn:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__.__dict__["resource_group_name"] = resource_group_name
            __props__.__dict__["tags"] = tags
            __props__.__dict__["tier"] = tier
            __props__.__dict__["endpoint"] = None
        super(Store, __self__).__init__(
            'azure:datalake/store:Store',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None,
            encryption_state: Optional[pulumi.Input[str]] = None,
            encryption_type: Optional[pulumi.Input[str]] = None,
            endpoint: Optional[pulumi.Input[str]] = None,
            firewall_allow_azure_ips: Optional[pulumi.Input[str]] = None,
            firewall_state: Optional[pulumi.Input[str]] = None,
            identity: Optional[pulumi.Input[pulumi.InputType['StoreIdentityArgs']]] = None,
            location: Optional[pulumi.Input[str]] = None,
            name: Optional[pulumi.Input[str]] = None,
            resource_group_name: Optional[pulumi.Input[str]] = None,
            tags: Optional[pulumi.Input[Mapping[str, pulumi.Input[str]]]] = None,
            tier: Optional[pulumi.Input[str]] = None) -> 'Store':
        """
        Get an existing Store resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] encryption_state: Is Encryption enabled on this Data Lake Store Account? Possible values are `Enabled` or `Disabled`. Defaults to `Enabled`.
        :param pulumi.Input[str] encryption_type: The Encryption Type used for this Data Lake Store Account. Currently can be set to `ServiceManaged` when `encryption_state` is `Enabled` - and must be a blank string when it's Disabled.
        :param pulumi.Input[str] endpoint: The Endpoint for the Data Lake Store.
        :param pulumi.Input[str] firewall_allow_azure_ips: are Azure Service IP's allowed through the firewall? Possible values are `Enabled` and `Disabled`. Defaults to `Enabled.`
        :param pulumi.Input[str] firewall_state: the state of the Firewall. Possible values are `Enabled` and `Disabled`. Defaults to `Enabled.`
        :param pulumi.Input[pulumi.InputType['StoreIdentityArgs']] identity: An `identity` block defined below.
        :param pulumi.Input[str] location: Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
        :param pulumi.Input[str] name: Specifies the name of the Data Lake Store. Changing this forces a new resource to be created. Has to be between 3 to 24 characters.
        :param pulumi.Input[str] resource_group_name: The name of the resource group in which to create the Data Lake Store.
        :param pulumi.Input[Mapping[str, pulumi.Input[str]]] tags: A mapping of tags to assign to the resource.
        :param pulumi.Input[str] tier: The monthly commitment tier for Data Lake Store. Accepted values are `Consumption`, `Commitment_1TB`, `Commitment_10TB`, `Commitment_100TB`, `Commitment_500TB`, `Commitment_1PB` or `Commitment_5PB`.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = _StoreState.__new__(_StoreState)

        __props__.__dict__["encryption_state"] = encryption_state
        __props__.__dict__["encryption_type"] = encryption_type
        __props__.__dict__["endpoint"] = endpoint
        __props__.__dict__["firewall_allow_azure_ips"] = firewall_allow_azure_ips
        __props__.__dict__["firewall_state"] = firewall_state
        __props__.__dict__["identity"] = identity
        __props__.__dict__["location"] = location
        __props__.__dict__["name"] = name
        __props__.__dict__["resource_group_name"] = resource_group_name
        __props__.__dict__["tags"] = tags
        __props__.__dict__["tier"] = tier
        return Store(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter(name="encryptionState")
    def encryption_state(self) -> pulumi.Output[Optional[str]]:
        """
        Is Encryption enabled on this Data Lake Store Account? Possible values are `Enabled` or `Disabled`. Defaults to `Enabled`.
        """
        return pulumi.get(self, "encryption_state")

    @property
    @pulumi.getter(name="encryptionType")
    def encryption_type(self) -> pulumi.Output[str]:
        """
        The Encryption Type used for this Data Lake Store Account. Currently can be set to `ServiceManaged` when `encryption_state` is `Enabled` - and must be a blank string when it's Disabled.
        """
        return pulumi.get(self, "encryption_type")

    @property
    @pulumi.getter
    def endpoint(self) -> pulumi.Output[str]:
        """
        The Endpoint for the Data Lake Store.
        """
        return pulumi.get(self, "endpoint")

    @property
    @pulumi.getter(name="firewallAllowAzureIps")
    def firewall_allow_azure_ips(self) -> pulumi.Output[Optional[str]]:
        """
        are Azure Service IP's allowed through the firewall? Possible values are `Enabled` and `Disabled`. Defaults to `Enabled.`
        """
        return pulumi.get(self, "firewall_allow_azure_ips")

    @property
    @pulumi.getter(name="firewallState")
    def firewall_state(self) -> pulumi.Output[Optional[str]]:
        """
        the state of the Firewall. Possible values are `Enabled` and `Disabled`. Defaults to `Enabled.`
        """
        return pulumi.get(self, "firewall_state")

    @property
    @pulumi.getter
    def identity(self) -> pulumi.Output[Optional['outputs.StoreIdentity']]:
        """
        An `identity` block defined below.
        """
        return pulumi.get(self, "identity")

    @property
    @pulumi.getter
    def location(self) -> pulumi.Output[str]:
        """
        Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
        """
        return pulumi.get(self, "location")

    @property
    @pulumi.getter
    def name(self) -> pulumi.Output[str]:
        """
        Specifies the name of the Data Lake Store. Changing this forces a new resource to be created. Has to be between 3 to 24 characters.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="resourceGroupName")
    def resource_group_name(self) -> pulumi.Output[str]:
        """
        The name of the resource group in which to create the Data Lake Store.
        """
        return pulumi.get(self, "resource_group_name")

    @property
    @pulumi.getter
    def tags(self) -> pulumi.Output[Optional[Mapping[str, str]]]:
        """
        A mapping of tags to assign to the resource.
        """
        return pulumi.get(self, "tags")

    @property
    @pulumi.getter
    def tier(self) -> pulumi.Output[Optional[str]]:
        """
        The monthly commitment tier for Data Lake Store. Accepted values are `Consumption`, `Commitment_1TB`, `Commitment_10TB`, `Commitment_100TB`, `Commitment_500TB`, `Commitment_1PB` or `Commitment_5PB`.
        """
        return pulumi.get(self, "tier")

