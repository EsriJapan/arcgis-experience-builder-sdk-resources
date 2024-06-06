/** @jsx jsx */
import { React, AllWidgetProps, jsx } from "jimu-core";
import { JimuMapViewComponent, JimuMapView } from "jimu-arcgis";

export default class Widget extends React.PureComponent<AllWidgetProps<any>, any> {

    state = {
        jimuMapView: null
    };

    activeViewChangeHandler = async (jmv: JimuMapView) => {
        if (jmv) {
            this.setState({
                jimuMapView: jmv
            });
        }
    };

    render() {
        return (
            <div className="widget-starter jimu-widget">
                {this.props.hasOwnProperty("useMapWidgetIds") &&
                    this.props.useMapWidgetIds &&
                    this.props.useMapWidgetIds[0] && (
                        <JimuMapViewComponent
                            useMapWidgetId={this.props.useMapWidgetIds?.[0]}
                            onActiveViewChange={this.activeViewChangeHandler}
                        />
                    )
                }
                <p>
                    設定されている Web マップ
                </p>
                <p>{this.state.jimuMapView?.view.map.portalItem.title} </p>
            </div>
        );
    }
}