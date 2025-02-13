# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union, overload
from .. import _utilities
from . import outputs

__all__ = [
    'GetVpnGatewayResult',
    'AwaitableGetVpnGatewayResult',
    'get_vpn_gateway',
]

@pulumi.output_type
class GetVpnGatewayResult:
    """
    A collection of values returned by getVpnGateway.
    """
    def __init__(__self__, bgp_settings=None, id=None, location=None, name=None, resource_group_name=None, scale_unit=None, tags=None, virtual_hub_id=None):
        if bgp_settings and not isinstance(bgp_settings, list):
            raise TypeError("Expected argument 'bgp_settings' to be a list")
        pulumi.set(__self__, "bgp_settings", bgp_settings)
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if location and not isinstance(location, str):
            raise TypeError("Expected argument 'location' to be a str")
        pulumi.set(__self__, "location", location)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if resource_group_name and not isinstance(resource_group_name, str):
            raise TypeError("Expected argument 'resource_group_name' to be a str")
        pulumi.set(__self__, "resource_group_name", resource_group_name)
        if scale_unit and not isinstance(scale_unit, int):
            raise TypeError("Expected argument 'scale_unit' to be a int")
        pulumi.set(__self__, "scale_unit", scale_unit)
        if tags and not isinstance(tags, dict):
            raise TypeError("Expected argument 'tags' to be a dict")
        pulumi.set(__self__, "tags", tags)
        if virtual_hub_id and not isinstance(virtual_hub_id, str):
            raise TypeError("Expected argument 'virtual_hub_id' to be a str")
        pulumi.set(__self__, "virtual_hub_id", virtual_hub_id)

    @property
    @pulumi.getter(name="bgpSettings")
    def bgp_settings(self) -> Sequence['outputs.GetVpnGatewayBgpSettingResult']:
        """
        A `bgp_settings` block as defined below.
        """
        return pulumi.get(self, "bgp_settings")

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        The provider-assigned unique ID for this managed resource.
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter
    def location(self) -> str:
        """
        The Azure location where the VPN Gateway exists.
        """
        return pulumi.get(self, "location")

    @property
    @pulumi.getter
    def name(self) -> str:
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="resourceGroupName")
    def resource_group_name(self) -> str:
        return pulumi.get(self, "resource_group_name")

    @property
    @pulumi.getter(name="scaleUnit")
    def scale_unit(self) -> int:
        """
        The Scale Unit of this VPN Gateway.
        """
        return pulumi.get(self, "scale_unit")

    @property
    @pulumi.getter
    def tags(self) -> Mapping[str, str]:
        """
        A mapping of tags assigned to the VPN Gateway.
        """
        return pulumi.get(self, "tags")

    @property
    @pulumi.getter(name="virtualHubId")
    def virtual_hub_id(self) -> str:
        """
        The ID of the Virtual Hub within which this VPN Gateway has been created.
        """
        return pulumi.get(self, "virtual_hub_id")


class AwaitableGetVpnGatewayResult(GetVpnGatewayResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetVpnGatewayResult(
            bgp_settings=self.bgp_settings,
            id=self.id,
            location=self.location,
            name=self.name,
            resource_group_name=self.resource_group_name,
            scale_unit=self.scale_unit,
            tags=self.tags,
            virtual_hub_id=self.virtual_hub_id)


def get_vpn_gateway(name: Optional[str] = None,
                    resource_group_name: Optional[str] = None,
                    opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetVpnGatewayResult:
    """
    Use this data source to access information about an existing VPN Gateway within a Virtual Hub.

    ## Example Usage

    ```python
    import pulumi
    import pulumi_azure as azure

    example = azure.network.get_vpn_gateway(name="existing-local-vpn_gateway",
        resource_group_name="existing-vpn_gateway")
    pulumi.export("azurermVpnGatewayId", example.id)
    ```


    :param str name: The Name of the VPN Gateway.
    :param str resource_group_name: The name of the Resource Group where the VPN Gateway exists.
    """
    __args__ = dict()
    __args__['name'] = name
    __args__['resourceGroupName'] = resource_group_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure:network/getVpnGateway:getVpnGateway', __args__, opts=opts, typ=GetVpnGatewayResult).value

    return AwaitableGetVpnGatewayResult(
        bgp_settings=__ret__.bgp_settings,
        id=__ret__.id,
        location=__ret__.location,
        name=__ret__.name,
        resource_group_name=__ret__.resource_group_name,
        scale_unit=__ret__.scale_unit,
        tags=__ret__.tags,
        virtual_hub_id=__ret__.virtual_hub_id)
