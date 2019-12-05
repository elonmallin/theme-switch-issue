import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import * as themes from "nativescript-themes";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onTapThemeOne(): void {
        this.changeTheme("theme-one");
    }
    
    onTapThemeTwo(): void {
        this.changeTheme("theme-two");
    }

    private changeTheme(name): void {
        import(
            /*  webpackMode: "lazy",
                webpackInclude: /\.s?css$/,
                webpackExclude: /_app-styles\.scss/ */
            `../../themes/${name}`)
            .then((skinStyles) => {
                themes.applyThemeCss(skinStyles, name);
            });
    }
}
