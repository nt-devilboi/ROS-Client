import React from "react";

enum StatusResponse{
    NotLoad = 0,
    Ok = 200,
    BadLoad = 400,
    NotServer = 500,
}

export default StatusResponse;