/** @jsx jsx */
import { React, jsx } from "jimu-core";
import { AllWidgetSettingProps } from "jimu-for-builder";
import { MapWidgetSelector } from "jimu-ui/advanced/setting-components";
import { SettingSection, SettingRow } from 'jimu-ui/advanced/setting-components';

export default class Setting extends React.PureComponent<AllWidgetSettingProps<any>, any> {

    onMapWidgetSelected = (useMapWidgetIds: string[]) => {
        this.props.onSettingChange({
            id: this.props.id,
            useMapWidgetIds: useMapWidgetIds
        });
    };
    render() {
        return <div className="widget-setting-base">
            <SettingSection className="map-selector-section"
                title={"ソース"}
                role="group"
                aria-label={"ソース"}>
                <SettingRow label={"マップ ウィジェットの選択"} />
                <SettingRow>
                    <MapWidgetSelector
                        useMapWidgetIds={this.props.useMapWidgetIds}
                        onSelect={this.onMapWidgetSelected}
                    />
                </SettingRow>
            </SettingSection>
        </div>;
    }
}