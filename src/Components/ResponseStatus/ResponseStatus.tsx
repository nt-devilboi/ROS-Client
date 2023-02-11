import React from "react";
import StatusResponse from "../../Api/StatusResponse";
import statusResponse from "../../Api/StatusResponse";

export default class ResponseStatus extends React.Component<{ responseStatus: StatusResponse }> {

    render() {
        return (
            <div>
                <p>
                    {this.props.responseStatus === StatusResponse.Created && "данные загруженны"}
                    {this.props.responseStatus === StatusResponse.BadLoad && "данные потеряны"}
                    {this.props.responseStatus === statusResponse.NotLoad && ""}
                </p>
            </div>
        );
    }

}