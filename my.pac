function FindProxyForURL(url, host)  
{
    if (        
        dnsDomainIs( host,"translate.google.com")  ||
        dnsDomainIs( host,"translate.googleapis.com")  ||
        dnsDomainIs( host,".google.com/")  
      )
    {
        return "PROXY 192.9.200.23:3128";
    } 
   else
    {
        return "DIRECT";
    }
    
}
