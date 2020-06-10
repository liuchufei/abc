function FindProxyForURL(url, host)  
{
    //alert("Local IP address is: " + myIpAddress());
    if (        
        dnsDomainIs( host,"www.baidu.cn")  ||
        dnsDomainIs( host,"blog.csdn.net")  
      )
    {
        return "DIRECT";
    } 
   if (isInNet(host, "10.0.0.0",  "255.0.0.0"))
    {
        return "DIRECT";
    }
    else if (isInNet(myIpAddress(), "10.15.194.0", "255.255.254.0"))
    {
        return "PROXY 192.168.6.100:8118";
    }
}