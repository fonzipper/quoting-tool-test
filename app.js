// These polyfills must be the first thing imported in node
System.register(['angular2-universal/polyfills', 'path', 'express', '@angular/router', '@angular/core', 'angular2-universal', './app'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var path, express, router_1, core_1, angular2_universal_1, app_1;
    var app, ROOT;
    function ngApp(req, res) {
        var baseUrl = '/';
        var url = req.originalUrl || '/';
        var config = {
            directives: [app_1.App],
            // dependencies shared among all requests to server
            platformProviders: [
                { provide: angular2_universal_1.ORIGIN_URL, useValue: 'http://localhost:3000' },
                { provide: angular2_universal_1.BASE_URL, useValue: baseUrl },
            ],
            // dependencies re-created for each request
            providers: [
                { provide: angular2_universal_1.REQUEST_URL, useValue: url },
                router_1.provideRouter(app_1.routes),
                angular2_universal_1.NODE_LOCATION_PROVIDERS,
                angular2_universal_1.NODE_HTTP_PROVIDERS,
            ],
            // if true, server will wait for all async to resolve before returning response
            async: true,
            // if you want preboot, you need to set selector for the app root
            // you can also include various preboot options here (explained in separate document)
            preboot: false // { appRoot: 'app' }
        };
        res.render('index', config);
    }
    return {
        setters:[
            function (_1) {},
            function (path_1) {
                path = path_1;
            },
            function (express_1) {
                express = express_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angular2_universal_1_1) {
                angular2_universal_1 = angular2_universal_1_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            }],
        execute: function() {
            app = express();
            ROOT = path.join(path.resolve(__dirname, '..'));
            core_1.enableProdMode();
            // Express View
            app.engine('.html', angular2_universal_1.expressEngine);
            app.set('views', __dirname);
            app.set('view engine', 'html');
            // Serve static files
            app.use(express.static(ROOT, { index: false }));
            // send all requests to Angular Universal
            // if you want Express to handle certain routes (ex. for an API) make sure you adjust this
            app.get('/', ngApp);
            app.get('/home', ngApp);
            app.get('/about', ngApp);
            // Server
            app.listen(3000, function () {
                console.log('Listening on: http://localhost:3000');
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJEQUEyRDs7Ozs7UUFzQnJELEdBQUcsRUFDSCxJQUFJO0lBU1YsZUFBZSxHQUFHLEVBQUUsR0FBRztRQUNuQixJQUFJLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDbEIsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLFdBQVcsSUFBSSxHQUFHLENBQUM7UUFFakMsSUFBSSxNQUFNLEdBQXdCO1lBQzlCLFVBQVUsRUFBRSxDQUFFLFNBQUcsQ0FBRTtZQUVuQixtREFBbUQ7WUFDbkQsaUJBQWlCLEVBQUU7Z0JBQ2YsRUFBQyxPQUFPLEVBQUUsK0JBQVUsRUFBRSxRQUFRLEVBQUUsdUJBQXVCLEVBQUM7Z0JBQ3hELEVBQUMsT0FBTyxFQUFFLDZCQUFRLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBQzthQUN6QztZQUVELDJDQUEyQztZQUMzQyxTQUFTLEVBQUU7Z0JBQ1AsRUFBQyxPQUFPLEVBQUUsZ0NBQVcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFDO2dCQUNyQyxzQkFBYSxDQUFDLFlBQU0sQ0FBQztnQkFDckIsNENBQXVCO2dCQUN2Qix3Q0FBbUI7YUFDdEI7WUFFRCwrRUFBK0U7WUFDL0UsS0FBSyxFQUFFLElBQUk7WUFFWCxpRUFBaUU7WUFDakUscUZBQXFGO1lBQ3JGLE9BQU8sRUFBRSxLQUFLLENBQUMscUJBQXFCO1NBQ3ZDLENBQUM7UUFFRixHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXhDSyxHQUFHLEdBQUcsT0FBTyxFQUFFLENBQUM7WUFDaEIsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUV0RCxxQkFBYyxFQUFFLENBQUM7WUFFakIsZUFBZTtZQUNmLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLGtDQUFhLENBQUMsQ0FBQztZQUNuQyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztZQUM1QixHQUFHLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztZQWtDL0IscUJBQXFCO1lBQ3JCLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDO1lBRTlDLHlDQUF5QztZQUN6QywwRkFBMEY7WUFDMUYsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDcEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDeEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFFekIsU0FBUztZQUNULEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO2dCQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMscUNBQXFDLENBQUMsQ0FBQztZQUN2RCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZXNlIHBvbHlmaWxscyBtdXN0IGJlIHRoZSBmaXJzdCB0aGluZyBpbXBvcnRlZCBpbiBub2RlXG5cbmltcG9ydCAnYW5ndWxhcjItdW5pdmVyc2FsL3BvbHlmaWxscyc7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcblxuLy8gQW5ndWxhciAyIFVuaXZlcnNhbFxuaW1wb3J0IHtwcm92aWRlUm91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtlbmFibGVQcm9kTW9kZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICAgIGV4cHJlc3NFbmdpbmUsXG4gICAgQkFTRV9VUkwsXG4gICAgUkVRVUVTVF9VUkwsXG4gICAgT1JJR0lOX1VSTCxcbiAgICBOT0RFX0xPQ0FUSU9OX1BST1ZJREVSUyxcbiAgICBOT0RFX0hUVFBfUFJPVklERVJTLFxuICAgIEV4cHJlc3NFbmdpbmVDb25maWdcbn0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcblxuLy8gcmVwbGFjZSB0aGlzIGxpbmUgd2l0aCB5b3VyIEFuZ3VsYXIgMiByb290IGNvbXBvbmVudFxuaW1wb3J0IHtBcHAsIHJvdXRlc30gZnJvbSAnLi9hcHAnO1xuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5jb25zdCBST09UID0gcGF0aC5qb2luKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLicpKTtcblxuZW5hYmxlUHJvZE1vZGUoKTtcblxuLy8gRXhwcmVzcyBWaWV3XG5hcHAuZW5naW5lKCcuaHRtbCcsIGV4cHJlc3NFbmdpbmUpO1xuYXBwLnNldCgndmlld3MnLCBfX2Rpcm5hbWUpO1xuYXBwLnNldCgndmlldyBlbmdpbmUnLCAnaHRtbCcpO1xuXG5mdW5jdGlvbiBuZ0FwcChyZXEsIHJlcykge1xuICAgIGxldCBiYXNlVXJsID0gJy8nO1xuICAgIGxldCB1cmwgPSByZXEub3JpZ2luYWxVcmwgfHwgJy8nO1xuXG4gICAgbGV0IGNvbmZpZzogRXhwcmVzc0VuZ2luZUNvbmZpZyA9IHtcbiAgICAgICAgZGlyZWN0aXZlczogWyBBcHAgXSxcblxuICAgICAgICAvLyBkZXBlbmRlbmNpZXMgc2hhcmVkIGFtb25nIGFsbCByZXF1ZXN0cyB0byBzZXJ2ZXJcbiAgICAgICAgcGxhdGZvcm1Qcm92aWRlcnM6IFtcbiAgICAgICAgICAgIHtwcm92aWRlOiBPUklHSU5fVVJMLCB1c2VWYWx1ZTogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCd9LFxuICAgICAgICAgICAge3Byb3ZpZGU6IEJBU0VfVVJMLCB1c2VWYWx1ZTogYmFzZVVybH0sXG4gICAgICAgIF0sXG5cbiAgICAgICAgLy8gZGVwZW5kZW5jaWVzIHJlLWNyZWF0ZWQgZm9yIGVhY2ggcmVxdWVzdFxuICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgIHtwcm92aWRlOiBSRVFVRVNUX1VSTCwgdXNlVmFsdWU6IHVybH0sXG4gICAgICAgICAgICBwcm92aWRlUm91dGVyKHJvdXRlcyksXG4gICAgICAgICAgICBOT0RFX0xPQ0FUSU9OX1BST1ZJREVSUyxcbiAgICAgICAgICAgIE5PREVfSFRUUF9QUk9WSURFUlMsXG4gICAgICAgIF0sXG5cbiAgICAgICAgLy8gaWYgdHJ1ZSwgc2VydmVyIHdpbGwgd2FpdCBmb3IgYWxsIGFzeW5jIHRvIHJlc29sdmUgYmVmb3JlIHJldHVybmluZyByZXNwb25zZVxuICAgICAgICBhc3luYzogdHJ1ZSxcblxuICAgICAgICAvLyBpZiB5b3Ugd2FudCBwcmVib290LCB5b3UgbmVlZCB0byBzZXQgc2VsZWN0b3IgZm9yIHRoZSBhcHAgcm9vdFxuICAgICAgICAvLyB5b3UgY2FuIGFsc28gaW5jbHVkZSB2YXJpb3VzIHByZWJvb3Qgb3B0aW9ucyBoZXJlIChleHBsYWluZWQgaW4gc2VwYXJhdGUgZG9jdW1lbnQpXG4gICAgICAgIHByZWJvb3Q6IGZhbHNlIC8vIHsgYXBwUm9vdDogJ2FwcCcgfVxuICAgIH07XG5cbiAgICByZXMucmVuZGVyKCdpbmRleCcsIGNvbmZpZyk7XG59XG5cbi8vIFNlcnZlIHN0YXRpYyBmaWxlc1xuYXBwLnVzZShleHByZXNzLnN0YXRpYyhST09ULCB7aW5kZXg6IGZhbHNlfSkpO1xuXG4vLyBzZW5kIGFsbCByZXF1ZXN0cyB0byBBbmd1bGFyIFVuaXZlcnNhbFxuLy8gaWYgeW91IHdhbnQgRXhwcmVzcyB0byBoYW5kbGUgY2VydGFpbiByb3V0ZXMgKGV4LiBmb3IgYW4gQVBJKSBtYWtlIHN1cmUgeW91IGFkanVzdCB0aGlzXG5hcHAuZ2V0KCcvJywgbmdBcHApO1xuYXBwLmdldCgnL2hvbWUnLCBuZ0FwcCk7XG5hcHAuZ2V0KCcvYWJvdXQnLCBuZ0FwcCk7XG5cbi8vIFNlcnZlclxuYXBwLmxpc3RlbigzMDAwLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ0xpc3RlbmluZyBvbjogaHR0cDovL2xvY2FsaG9zdDozMDAwJyk7XG59KTtcbiJdfQ==