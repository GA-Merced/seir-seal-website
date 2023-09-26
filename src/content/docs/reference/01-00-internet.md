---
title: How the Internet Works
description: Reference on how the internet works
---

# TCP/IP

TCP/IP, which stands for Transmission Control Protocol/Internet Protocol, is a fundamental set of networking protocols that forms the foundation of the Internet and most local area networks (LANs). It provides a framework for data communication, ensuring that data packets can be reliably transmitted between devices on a network. Let's break down how TCP/IP works and how it enables the Internet:

## 1. What is TCP/IP:


- **Transmission Control Protocol (TCP):** TCP is one of the two main protocols in TCP/IP. It is responsible for ensuring that data sent over a network reaches its destination accurately and reliably. TCP breaks data into packets, adds sequencing information, manages acknowledgments, and retransmits data if any packets are lost or corrupted. This reliability is crucial for applications like web browsing, email, and file transfer.

- **Internet Protocol (IP):** IP is the other key protocol in TCP/IP. It deals with the routing of data packets across networks, including the global Internet. IP assigns unique addresses to devices on a network, allowing routers to forward packets to the correct destination. IPv4 (Internet Protocol version 4) and IPv6 (Internet Protocol version 6) are two versions of IP, with IPv6 addressing the limitations of IPv4 and providing a larger address space.

## 2. How TCP/IP Works:


- **Packetization:** When data is sent over a network, it is divided into smaller packets. These packets contain the data, as well as control information like source and destination addresses, sequence numbers, and checksums.

- **Routing:** IP is responsible for routing packets from the source to the destination. Routers on the network use the destination IP address in each packet's header to determine where to forward it.

- **Transmission:** TCP ensures reliable transmission by establishing a connection between the sender and receiver, managing data flow, and verifying that all packets are received correctly. It uses a three-way handshake to establish a connection, sets up flow control mechanisms, and performs error checking.

- **Acknowledgments:** TCP/IP uses acknowledgments to confirm that data has been received successfully. If a packet is not acknowledged within a certain time frame, TCP will retransmit it to ensure delivery.

## 3. How TCP/IP Enables the Internet:


- **Interoperability:** TCP/IP is an open and standardized protocol suite, making it possible for different devices and networks to communicate seamlessly. This interoperability is essential for the global reach of the Internet, as it connects various types of devices, operating systems, and networks.

- **Scalability:** TCP/IP is designed to work at different scales, from small local networks to the vast global Internet. Its addressing scheme allows for the identification of billions of devices, making it suitable for the ever-expanding number of internet-connected devices.

- **Reliability:** TCP/IP's reliability mechanisms ensure that data can be transmitted over long distances and through various network devices while minimizing the chances of data loss or corruption.

- **Flexibility:** TCP/IP can support a wide range of applications, from web browsing and email to video streaming and online gaming. It doesn't dictate the specific services or applications that can run on top of it, making it adaptable to evolving technologies.

In summary, TCP/IP is the backbone of the Internet, providing a standardized, reliable, and scalable framework for data communication. It allows devices and networks to communicate, ensures data integrity and delivery, and supports a wide range of applications, enabling the vast interconnectedness we experience on the modern Internet.

# IP Addresses and Their Structure:

IP addresses, short for Internet Protocol addresses, serve as unique identifiers for devices connected to a network, enabling data packets to be correctly routed from source to destination across the Internet or any other network. They play a fundamental role in the functioning of the internet and local area networks (LANs). IP addresses follow a specific structure and can be categorized into two main versions: IPv4 and IPv6.

## 1. IPv4 (Internet Protocol version 4):

**Structure:** IPv4 addresses are composed of 32 bits, which are typically represented as four decimal numbers separated by periods (e.g., 192.168.1.1). Each of the four numbers ranges from 0 to 255.

**Example:** An IPv4 address like 192.168.1.1 is divided into four octets, with each octet representing 8 bits. In binary form, this address might look like: 11000000.10101000.00000001.00000001.

IPv4 addresses have been in use since the early days of the Internet. However, due to the exponential growth of internet-connected devices, the limited number of available IPv4 addresses (about 4.3 billion) has led to the adoption of IPv6.

## 2. IPv6 (Internet Protocol version 6):

**Structure:** IPv6 addresses are 128 bits long and are represented as eight groups of four hexadecimal digits separated by colons (e.g., 2001:0db8:85a3:0000:0000:8a2e:0370:7334).

**Example:** An IPv6 address like 2001:0db8:85a3:0000:0000:8a2e:0370:7334 has a much larger address space than IPv4, allowing for approximately 340 undecillion unique addresses.

IPv6 was introduced to address the imminent exhaustion of IPv4 addresses and to accommodate the expanding number of internet-connected devices, including smartphones, IoT devices, and more. Its increased address space ensures that every device can have a unique IP address.

## Components of IP Addresses:

**Network Portion:** In an IP address, the network portion identifies the network to which a device belongs. Routers use this information to determine how to route data packets.

**Host Portion:** The host portion identifies a specific device within the network. It distinguishes one device from another on the same network.

## Dynamic and Static IP Addresses:

**Dynamic IP Addresses:** These are typically assigned temporarily by a DHCP (Dynamic Host Configuration Protocol) server. Devices on a network with dynamic IP addresses may receive different IPs each time they connect to the network.

**Static IP Addresses:** These are manually assigned and remain fixed. Servers, routers, and certain networked devices often use static IPs to ensure consistent addressing.

In summary, IP addresses are essential elements of computer networking, serving as the foundation for routing data packets across the Internet. They come in two main versions, IPv4 and IPv6, with distinct structures. The structure of an IP address helps identify both the network and the specific device within that network, enabling seamless communication in the digital world.

# LocalHost and TCP/IP Ports (localhost:3000)

LocalHost refers to the loopback network interface of a device, typically a computer or server. It is a special reserved IP address that always points back to the device itself, allowing programs on that device to communicate with each other over the network using the network stack, as if they were communicating with remote devices. LocalHost is often represented by the IP address 127.0.0.1 in IPv4 or ::1 in IPv6.

LocalHost is a useful tool for testing and troubleshooting network-related software because it allows developers and administrators to check if network services and applications are functioning correctly without relying on an external network connection. When a program sends data to LocalHost, the data is routed internally, without ever leaving the device, making it a safe and isolated environment for testing.

## Port Numbers:

Port numbers are a crucial part of the addressing system in networking. They help direct network traffic to specific applications or services running on a device. Think of them as doors or entry points on a computer or server, allowing data to enter and exit specific programs.

Port numbers are represented as 16-bit unsigned integers, meaning they can range from 0 to 65,535. They are divided into three categories:

**Well-Known Ports (0-1023):** These are reserved for commonly used services and protocols. For example:

**Port 80:** HTTP (Hypertext Transfer Protocol) for web browsing.

**Port 443:** HTTPS (HTTP Secure) for secure web browsing.

**Port 25:** SMTP (Simple Mail Transfer Protocol) for sending email.

**Port 22:** SSH (Secure Shell) for secure remote login.

**Registered Ports (1024-49,151):** These are used by applications and services that have been registered with the Internet Assigned Numbers Authority (IANA). They are not as widely recognized as well-known ports but are still essential for specific applications.

**Dynamic or Private Ports (49,152-65,535):** These are available for temporary or dynamic assignment by applications and services. They are typically used for client-side connections and are chosen by the operating system or application dynamically.

## Commonly Used Port Numbers:

Here are some commonly used port numbers and their associated services:

**Port 21:** FTP (File Transfer Protocol) - Used for transferring files over a network.

**Port 53:** DNS (Domain Name System) - Used for translating domain names into IP addresses.

**Port 67/68:** DHCP (Dynamic Host Configuration Protocol) - Used for automatically assigning IP addresses to devices on a network.

**Port 110:** POP3 (Post Office Protocol version 3) - Used for retrieving email from a mail server.

**Port 143:** IMAP (Internet Message Access Protocol) - Used for retrieving email from a mail server, with more advanced features compared to POP3.

**Port 3306:** MySQL - Used for database communication in MySQL database systems.

**Port 3389:** RDP (Remote Desktop Protocol) - Used for remote desktop connections to Windows-based systems.

**Port 5432:** PostgreSQL - Used for database communication in PostgreSQL database systems.

**Port 27017:** MongoDB - Used for database communication in MongoDB NoSQL database systems.

These are just a few examples of the many port numbers in use across the Internet. Understanding port numbers is essential for configuring firewalls, routers, and networked applications to ensure proper communication and security.

# URI (Uniform Resource Identifier) and URL (Uniform Resource Locator):

URI (Uniform Resource Identifier) and URL (Uniform Resource Locator) are fundamental concepts in web technology. They are used to identify and locate resources, such as web pages, images, documents, and other objects, on the internet or within a network. While the terms URI and URL are often used interchangeably, a URL is a specific type of URI.

## URI Structure:

A URI is a string of characters that uniquely identifies a resource. It has the following structure:

```ruby
scheme:[//authority]path[?query][#fragment]
```

Let's break down the components of a URI:

**Scheme:** This is the first part of a URI and specifies the protocol or method used to access the resource. Common schemes include "http," "https," "ftp," "mailto," and "file."

**Authority:** This part is optional and typically contains information about the host (e.g., a domain name or IP address) and, in some cases, a port number. It is preceded by "//." For example, in the URL `https://www.example.com:8080`, the authority is `www.example.com:8080`.

**Path:** The path component represents the hierarchical structure within the resource. It specifies the location of the resource on the server's file system or within a database. For example, in the URL `https://www.example.com/images/pic.jpg`, the path is `/images/pic.jpg`.

**Query:** The query component is also optional and contains parameters or data that can be used to modify the resource request. It starts with a question mark "?" and is often used in web applications to pass data to a server. For example, in the URL `https://www.example.com/search?query=URI`, the query is `query=URI`.

**Fragment:** The fragment component is also optional and is used to specify a specific section or anchor within a resource, such as a particular section of a webpage. It is preceded by a hash "#" symbol. For example, in the URL `https://www.example.com/page#section2`, the fragment is `section2`.

## URLs:

A URL (Uniform Resource Locator) is a specific type of URI that not only identifies a resource but also provides the means to locate it. URLs include the scheme and authority components required to access the resource. Here are some examples of URLs:

- `http://www.example.com/index.html` (URL for a web page)
- `ftp://ftp.example.com/files/file.txt` (URL for an FTP resource)
- `mailto:info@example.com` (URL for an email address)
- `file:///C:/Documents/document.pdf` (URL for a local file)

## URI and URL Use:

URIs and URLs are used extensively in various aspects of web technology and internet communication:

**Web Browsing:** URLs are used to access web pages and resources on the World Wide Web. When you enter a URL into a web browser's address bar, the browser retrieves the corresponding web page.

**Hyperlinks:** Hyperlinks on web pages use URLs to link to other web pages, images, videos, or documents. Clicking on a hyperlink redirects the browser to the linked URL.

**APIs and Web Services:** URIs are used in web APIs to identify and request data or actions from web services. APIs typically use HTTP or HTTPS URLs to specify the resource and operation.

**Email:** The "mailto" URL scheme is used to create email links, allowing users to send emails by clicking on the link.

**File Access:** URLs can be used to access files on both local and remote systems, whether through web browsers, FTP clients, or other file transfer methods.

In summary, URIs and URLs are integral to how resources are identified, accessed, and linked on the internet. They provide a standardized way to reference resources across the web and facilitate communication between clients and servers in various applications and services.

# Relative URLs vs. Absolute URLs:

When working with hyperlinks and resource references on the web, you have the option to use either relative URLs or absolute URLs to specify the location of a resource. Each type has its advantages and use cases. Let's explore the differences between relative and absolute URLs:

## 1. Absolute URLs:

An absolute URL provides the complete web address (including the scheme, domain, and path) needed to locate a resource. Here's the structure of an absolute URL:

```ruby
scheme://domain/path/to/resource
```

**Scheme:** The protocol or method used to access the resource (e.g., "http," "https," "ftp").
**Domain:** The domain name or IP address of the server where the resource resides.
**Path:** The directory structure and filename that specify the resource's location on the server.

### Advantages of Absolute URLs:

**Unambiguous:** Absolute URLs provide a full and unambiguous reference to a resource. They are useful when linking to external websites or when you want to ensure that a specific resource is accessed, regardless of the current page's location.

**Direct Access:** Absolute URLs can directly access resources on other domains or servers, making them suitable for cross-domain linking.

### Examples of Absolute URLs:

- `https://www.example.com/images/pic.jpg`
- `http://www.example.com/index.html`
- `ftp://ftp.example.com/files/file.txt`

## 2. Relative URLs:

A relative URL specifies the location of a resource in relation to the current document's URL. It does not include the scheme or domain. Instead, it provides a path relative to the current page. Relative URLs can take different forms:

- **Relative Path:** Specifies a resource's location relative to the current page's directory structure.
- **Parent Directory (..):** Allows you to move up one level in the directory hierarchy.
- **Root Directory (/):** Specifies the root of the website or the domain.

### Advantages of Relative URLs:

**Simplicity:** Relative URLs are shorter and simpler to write, especially when referencing resources within the same website or domain.

**Flexibility:** They are easy to maintain because they adapt to changes in the website's directory structure. You can move or rename pages and their associated resources without breaking links.

### Examples of Relative URLs:

- `images/pic.jpg` (Resource in the same directory)
- `../docs/document.pdf` (Resource in the parent directory)
- `/index.html` (Resource at the root of the website)
When to Use Each:

**Absolute URLs:** Use absolute URLs when referencing external resources or when you need to ensure that a specific resource is accessed. They are essential for cross-domain linking.

**Relative URLs:** Use relative URLs when linking to resources within the same website or domain. They are ideal for simplifying link maintenance and adapting to changes in directory structure.

In summary, the choice between relative and absolute URLs depends on your specific needs. Both have their place in web development, and understanding when to use each type is crucial for creating effective and maintainable web content.

# DNS (Domain Name System):

The Domain Name System (DNS) is a fundamental component of the Internet that acts as a distributed directory service. It allows users and computers to access websites, services, and resources using user-friendly domain names (e.g., www.example.com) instead of numerical IP addresses (e.g., 192.168.1.1). DNS plays a crucial role in translating human-readable domain names into IP addresses, making it easier for people to navigate the Internet.

## How DNS Works:

The DNS operates in a hierarchical and distributed manner, with a global network of servers that work together to resolve domain names to IP addresses. Here's a simplified overview of how DNS works:

DNS Hierarchy: The DNS system is organized into a hierarchical structure, with each level managed by different entities. At the top of the hierarchy are the root servers, which store information about top-level domains (TLDs) like ".com," ".org," ".net," and country-code TLDs like ".uk" or ".ca."

## DNS Resolution Process:

**Step 1: Local DNS Resolver:** When you enter a domain name (e.g., www.example.com) in your web browser or a computer attempts to connect to a remote server, the request first goes to your local DNS resolver, typically provided by your Internet Service Provider (ISP).

**Step 2: Local DNS Cache:** The local DNS resolver checks its cache to see if it has previously resolved the requested domain name. If the information is found in the cache and is still valid, the resolver returns the corresponding IP address immediately, speeding up the process.

**Step 3: Recursive Query:** If the information is not in the cache or has expired, the local DNS resolver begins a recursive query. It contacts one of the root DNS servers to ask for information about the TLD (e.g., ".com").

**Step 4: TLD Server:** The root server responds by providing the IP address of the authoritative DNS server responsible for the TLD in the requested domain (in this case, ".com").

**Step 5: Authoritative DNS Server:** The local DNS resolver then contacts the authoritative DNS server for the specific domain (e.g., "example.com").

**Step 6: IP Address Retrieval:** The authoritative DNS server returns the IP address associated with the requested domain name to the local DNS resolver.

**Step 7: Local Cache Update:** The local DNS resolver stores the retrieved information in its cache for future use and sends the IP address to the requesting application (e.g., web browser).

- **Caching:** DNS servers, including the local DNS resolver, employ caching to store recently resolved domain name-to-IP address mappings. This reduces the need to repeatedly query authoritative DNS servers for the same information, improving DNS resolution speed and efficiency.

- **TTL (Time-to-Live):** DNS records have a Time-to-Live value, which indicates how long the information is considered valid in a cache. When the TTL expires, the resolver needs to fetch updated information from authoritative servers.

- **DNS Security:** DNS is vulnerable to various attacks, including DNS spoofing and cache poisoning. To enhance security, DNSSEC (DNS Security Extensions) was introduced, which digitally signs DNS records to ensure data integrity and authenticity.

In summary, the Domain Name System is a critical infrastructure that allows users to access resources on the Internet using human-readable domain names. It functions by translating domain names into IP addresses through a hierarchical and distributed network of DNS servers, reducing the complexity of navigating the vast expanse of the Internet.