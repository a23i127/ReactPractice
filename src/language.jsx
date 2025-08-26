import React from "react"; 
class Language extends React.Component {
    render() {
        return(
            <div className="language-title">
                <div className="language-name">{this.props.name}</div>
                <div className="laguage-image">
                  <img src={this.props.image}></img>
                </div>
            </div>
        )
    }
}
export default Language;