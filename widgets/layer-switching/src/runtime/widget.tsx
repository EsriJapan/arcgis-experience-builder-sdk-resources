/** @jsx jsx */
import { React, AllWidgetProps, css, jsx } from "jimu-core";
import { JimuMapViewComponent, JimuMapView } from "jimu-arcgis";
import { Button } from "jimu-ui";
import LayerView from "esri/views/layers/LayerView";
import Collection from "esri/core/Collection";


export default class Widget extends React.PureComponent<AllWidgetProps<any>, any> {

    // 処理内で利用する変数を定義
    state = {
        jimuMapView: null, /** 対象 Webマップ */
        webmapLayers: [], /** Web マップのレイヤー情報 */
        chkIdx: 0,  /** ボタンとレイヤーを紐づけるインデックス番号情報 */
        selected: "primary", /** 選択時のボタン デザイン */
        default: "secondary" /** 非選択時のボタン デザイン */
    };

    // 対象の Web マップが変更された際に実行
    activeViewChangeHandler = (jmv: JimuMapView) => {
        if (jmv) {
            this.setState({
                jimuMapView: jmv,
                webmapLayers: this.setLayerList(jmv.view.layerViews)
            });
        }
    };

    // Web マップからレイヤーの情報を全て取得
    setLayerList = (layers: Collection<LayerView>) => {
        const list = [];
        for (let idx = layers.length; 0 < idx; idx--) {
            const layer = layers.items[idx - 1];
            list[idx] = { id: layer.layer.id, name: layer.layer.title }
        }
        return list
    };

    // ボタン クリック時のイベント処理
    chngRadioBtn = (idx: Number, id: String) => {
        this.setState({
            chkIdx: idx
        });
        for (let cnt = 0; cnt < this.state.jimuMapView.view.map.layers.length; cnt++) {
            const layer = this.state.jimuMapView.view.map.layers.getItemAt(cnt);
            if (layer.id === id || id === 'all') {
                layer.visible = true;
            } else {
                layer.visible = false;
            }
        }
    };

    // UI 情報レンダリング
    render() {
        // UI のデザインを設定
        const widgetStyle = css`
                 background-color: var(--white);
                 padding: 10px;
                 height: 250px;
                 overflow-y: scroll;`
        // レイヤーリストからボタンを生成
        const { webmapLayers, jimuMapView } = this.state;
        let layerList = webmapLayers.length > 0
            && webmapLayers.map((item, idx) => {
                return (
                    <tr>
                        <td>
                            <Button style={{ width: 380 }} type={this.state.chkIdx === (idx - 1) ? this.state.selected : this.state.default}
                                onClick={() => this.chngRadioBtn((idx - 1), item.id)} size="default"> {item.name} </Button>
                        </td>
                    </tr>
                )
            }, this);

        // 初期表示処理
        if (jimuMapView) {
            for (let idx = 0; idx < jimuMapView.view.map.layers.length; idx++) {
                const layer = this.state.jimuMapView.view.map.layers.getItemAt(idx);
                if (idx === this.state.chkIdx || this.state.chkIdx === -1) {
                    layer.visible = true;
                } else {
                    layer.visible = false;
                }
            }
        }


        return (
            <div className="widget-starter jimu-widget" css={widgetStyle}>
                {this.props.hasOwnProperty("useMapWidgetIds") &&
                    this.props.useMapWidgetIds &&
                    this.props.useMapWidgetIds[0] && (
                        <JimuMapViewComponent
                            useMapWidgetId={this.props.useMapWidgetIds?.[0]}
                            onActiveViewChange={this.activeViewChangeHandler}
                        />
                    )
                }
                <table>
                    {layerList}
                </table>

            </div>
        );
    }
}
