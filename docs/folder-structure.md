# Nodekraft Core-API - Project Structure

  *This document is a work in progress and should be used as a reference for now*

  `src/config`
  * Includes configuration files
  * Examples:
    * global variables
    * logger config
    * ACL permission
    * SMTP config

`src/api/components`
* The heart of the component-based API. Also referred to as "resources".
* Each component consists of its own
  * routes
  * controller
  * model
  * service