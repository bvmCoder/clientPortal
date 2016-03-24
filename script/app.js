/**
 * Created by dPatel on 03.22.2015.
 */

var app = angular.module("myApp", ['ui.router']);
app.controller('MainController', MainController);

MainController.$inject = ['$http', '$state'];

function MainController($http, $state) {
    var self = this;
    self.toggleSideBar = toggleSideBar;
    self.selectUser = selectUser;

    self.navigationData = [{ "id": 1, "gender": "M", "name": "Phillip Reyes", "email": "preyes0@imdb.com", "city": "Austin" },
        { "id": 2, "gender": "F", "name": "Debra Murray", "email": "dmurray1@ft.com", "city": "Sheksna" },
        { "id": 3, "gender": "M", "name": "Keith Woods", "email": "kwoods2@soundcloud.com", "city": "Kharagauli" },
        { "id": 4, "gender": "M", "name": "Jimmy Oliver", "email": "joliver3@unc.edu", "city": "Foxrock" },
        { "id": 5, "gender": "F", "name": "Deborah Nichols", "email": "dnichols4@ox.ac.uk", "city": "Kāmyārān" },
        { "id": 6, "gender": "F", "name": "Sara Lynch", "email": "slynch5@example.com", "city": "At Tall al Kabīr" },
        { "id": 7, "gender": "F", "name": "Lisa Campbell", "email": "lcampbell6@list-manage.com", "city": "Guararapes" },
        { "id": 8, "gender": "F", "name": "Deborah Allen", "email": "dallen7@bizjournals.com", "city": "Yixing" },
        { "id": 9, "gender": "F", "name": "Bonnie Hamilton", "email": "bhamilton8@mtv.com", "city": "Sagopshi" },
        { "id": 10, "gender": "M", "name": "Donald Richards", "email": "drichards9@upenn.edu", "city": "Baishuiyang" },
        { "id": 11, "gender": "F", "name": "Paula Arnold", "email": "parnolda@seesaa.net", "city": "Salmi" },
        { "id": 12, "gender": "F", "name": "Brenda Morales", "email": "bmoralesb@paypal.com", "city": "Kema" },
        { "id": 13, "gender": "F", "name": "Julie Alexander", "email": "jalexanderc@europa.eu", "city": "Qarqania" },
        { "id": 14, "gender": "M", "name": "Eric Thomas", "email": "ethomasd@canalblog.com", "city": "Skrunda" },
        { "id": 15, "gender": "F", "name": "Elizabeth Smith", "email": "esmithe@nba.com", "city": "Bayeux" },
        { "id": 16, "gender": "M", "name": "Eugene Watson", "email": "ewatsonf@prweb.com", "city": "Borok" },
        { "id": 17, "gender": "F", "name": "Wanda Barnes", "email": "wbarnesg@joomla.org", "city": "Masis" },
        { "id": 18, "gender": "M", "name": "Bruce Kelly", "email": "bkellyh@dmoz.org", "city": "Segovia" },
        { "id": 19, "gender": "F", "name": "Annie Scott", "email": "ascotti@phpbb.com", "city": "Bystryanka" },
        { "id": 20, "gender": "F", "name": "Ruby Fields", "email": "rfieldsj@hp.com", "city": "Calibungan" },
        { "id": 21, "gender": "F", "name": "Diane Rivera", "email": "driverak@cbc.ca", "city": "Rencun" },
        { "id": 22, "gender": "F", "name": "Linda Butler", "email": "lbutlerl@yelp.com", "city": "Douliu" },
        { "id": 23, "gender": "F", "name": "Donna Olson", "email": "dolsonm@forbes.com", "city": "Lyon" },
        { "id": 24, "gender": "F", "name": "Wanda Edwards", "email": "wedwardsn@bandcamp.com", "city": "Huaquirca" },
        { "id": 25, "gender": "M", "name": "James Banks", "email": "jbankso@shop-pro.jp", "city": "Shuangfeng" },
        { "id": 26, "gender": "M", "name": "Terry Perez", "email": "tperezp@yellowpages.com", "city": "Dajin" },
        { "id": 27, "gender": "M", "name": "Harold Wallace", "email": "hwallaceq@posterous.com", "city": "Bánov" },
        { "id": 28, "gender": "F", "name": "Lillian Cox", "email": "lcoxr@com.com", "city": "Villa Nueva" },
        { "id": 29, "gender": "M", "name": "Craig Nguyen", "email": "cnguyens@nbcnews.com", "city": "Jatimulyo" },
        { "id": 30, "gender": "F", "name": "Ashley Rodriguez", "email": "arodriguezt@tripadvisor.com", "city": "Nyaunglebin" },
        { "id": 31, "gender": "M", "name": "Carl Elliott", "email": "celliottu@ocn.ne.jp", "city": "Shizikeng" },
        { "id": 32, "gender": "M", "name": "Walter Mendoza", "email": "wmendozav@blogger.com", "city": "Krinichnaya" },
        { "id": 33, "gender": "F", "name": "Nicole Palmer", "email": "npalmerw@geocities.com", "city": "Hujirt" },
        { "id": 34, "gender": "M", "name": "Chris Gilbert", "email": "cgilbertx@addtoany.com", "city": "Tivat" },
        { "id": 35, "gender": "M", "name": "Keith Fuller", "email": "kfullery@wordpress.com", "city": "Quillota" },
        { "id": 36, "gender": "F", "name": "Rachel Adams", "email": "radamsz@quantcast.com", "city": "Lučko" },
        { "id": 37, "gender": "F", "name": "Michelle Lane", "email": "mlane10@hatena.ne.jp", "city": "Thanatpin" },
        { "id": 38, "gender": "F", "name": "Judy Scott", "email": "jscott11@thetimes.co.uk", "city": "Enrekang" },
        { "id": 39, "gender": "M", "name": "Johnny Bennett", "email": "jbennett12@stumbleupon.com", "city": "Qianfoling" },
        { "id": 40, "gender": "F", "name": "Karen Nguyen", "email": "knguyen13@craigslist.org", "city": "Valongo" },
        { "id": 41, "gender": "M", "name": "Ronald Turner", "email": "rturner14@aboutads.info", "city": "Vitrolles" },
        { "id": 42, "gender": "F", "name": "Ann Sanchez", "email": "asanchez15@cornell.edu", "city": "Paris 12" },
        { "id": 43, "gender": "F", "name": "Catherine Austin", "email": "caustin16@github.io", "city": "Dartang" },
        { "id": 44, "gender": "M", "name": "Douglas Patterson", "email": "dpatterson17@webs.com", "city": "Cikujang" },
        { "id": 45, "gender": "M", "name": "William Arnold", "email": "warnold18@infoseek.co.jp", "city": "Sandefjord" },
        { "id": 46, "gender": "F", "name": "Helen Stanley", "email": "hstanley19@columbia.edu", "city": "Kota Kinabalu" },
        { "id": 47, "gender": "F", "name": "Gloria Thomas", "email": "gthomas1a@sogou.com", "city": "Staryy Cherek" },
        { "id": 48, "gender": "M", "name": "Dennis Carr", "email": "dcarr1b@nhs.uk", "city": "Murakami" },
        { "id": 49, "gender": "M", "name": "Gerald Green", "email": "ggreen1c@elpais.com", "city": "Khoronk’" },
        { "id": 50, "gender": "F", "name": "Jacqueline Harris", "email": "jharris1d@w3.org", "city": "Lameiras" },
        { "id": 51, "gender": "M", "name": "Robert Spencer", "email": "rspencer1e@sakura.ne.jp", "city": "Pasadena" },
        { "id": 52, "gender": "M", "name": "Gregory Fowler", "email": "gfowler1f@ow.ly", "city": "Gorbunki" },
        { "id": 53, "gender": "M", "name": "Shawn Stanley", "email": "sstanley1g@netscape.com", "city": "Češinovo" },
        { "id": 54, "gender": "M", "name": "Steve Rodriguez", "email": "srodriguez1h@fotki.com", "city": "Xuetian" },
        { "id": 55, "gender": "F", "name": "Frances Foster", "email": "ffoster1i@aboutads.info", "city": "Rehnān" },
        { "id": 56, "gender": "M", "name": "Matthew Larson", "email": "mlarson1j@blinklist.com", "city": "Kuty" },
        { "id": 57, "gender": "F", "name": "Wanda Wilson", "email": "wwilson1k@discuz.net", "city": "Pontalina" },
        { "id": 58, "gender": "M", "name": "Anthony Robertson", "email": "arobertson1l@ft.com", "city": "Qukuhu" },
        { "id": 59, "gender": "F", "name": "Barbara King", "email": "bking1m@upenn.edu", "city": "Uppsala" },
        { "id": 60, "gender": "M", "name": "Craig Young", "email": "cyoung1n@tmall.com", "city": "Anambongan" },
        { "id": 61, "gender": "F", "name": "Carolyn Moreno", "email": "cmoreno1o@reference.com", "city": "Lumil" },
        { "id": 62, "gender": "F", "name": "Marilyn Simpson", "email": "msimpson1p@wix.com", "city": "Boto" },
        { "id": 63, "gender": "M", "name": "Raymond Jones", "email": "rjones1q@springer.com", "city": "Suicheng" },
        { "id": 64, "gender": "F", "name": "Cheryl Diaz", "email": "cdiaz1r@seattletimes.com", "city": "Negararatu" },
        { "id": 65, "gender": "M", "name": "Bruce Duncan", "email": "bduncan1s@hugedomains.com", "city": "Cibenda" },
        { "id": 66, "gender": "F", "name": "Susan Morgan", "email": "smorgan1t@whitehouse.gov", "city": "Siemiatycze" },
        { "id": 67, "gender": "F", "name": "Judith Stephens", "email": "jstephens1u@cafepress.com", "city": "Sujiatuo" },
        { "id": 68, "gender": "F", "name": "Ann Stone", "email": "astone1v@vkontakte.ru", "city": "Sodankylä" },
        { "id": 69, "gender": "M", "name": "Randy Wilson", "email": "rwilson1w@rakuten.co.jp", "city": "Monteros" },
        { "id": 70, "gender": "M", "name": "Jeffrey Watkins", "email": "jwatkins1x@mapquest.com", "city": "Itapecuru Mirim" },
        { "id": 71, "gender": "M", "name": "Brian Campbell", "email": "bcampbell1y@gizmodo.com", "city": "Mamu" },
        { "id": 72, "gender": "F", "name": "Lori Duncan", "email": "lduncan1z@oracle.com", "city": "Estância" },
        { "id": 73, "gender": "F", "name": "Kathy Miller", "email": "kmiller20@tripod.com", "city": "Pasiragung" },
        { "id": 74, "gender": "M", "name": "Bobby Bishop", "email": "bbishop21@samsung.com", "city": "Denov" },
        { "id": 75, "gender": "M", "name": "Fred Watson", "email": "fwatson22@google.co.jp", "city": "Almaguer" },
        { "id": 76, "gender": "F", "name": "Christina Shaw", "email": "cshaw23@washingtonpost.com", "city": "Yingchuan" },
        { "id": 77, "gender": "M", "name": "Louis Peterson", "email": "lpeterson24@noaa.gov", "city": "Linggou" },
        { "id": 78, "gender": "M", "name": "Chris Hall", "email": "chall25@ifeng.com", "city": "Norrköping" },
        { "id": 79, "gender": "F", "name": "Kimberly Cunningham", "email": "kcunningham26@cdc.gov", "city": "Junik" },
        { "id": 80, "gender": "F", "name": "Bonnie Stone", "email": "bstone27@loc.gov", "city": "Kudanding" },
        { "id": 81, "gender": "F", "name": "Katherine Hansen", "email": "khansen28@stumbleupon.com", "city": "Timiryazevskoye" },
        { "id": 82, "gender": "M", "name": "Nicholas Martin", "email": "nmartin29@usda.gov", "city": "Ulster Spring" },
        { "id": 83, "gender": "F", "name": "Lois Garrett", "email": "lgarrett2a@stumbleupon.com", "city": "Linshanhe" },
        { "id": 84, "gender": "M", "name": "Clarence Young", "email": "cyoung2b@reference.com", "city": "New Orleans" },
        { "id": 85, "gender": "M", "name": "Willie Torres", "email": "wtorres2c@angelfire.com", "city": "Nyima" },
        { "id": 86, "gender": "F", "name": "Jessica Washington", "email": "jwashington2d@alibaba.com", "city": "Mozhong" },
        { "id": 87, "gender": "F", "name": "Rebecca Williams", "email": "rwilliams2e@mlb.com", "city": "Xiangyang" },
        { "id": 88, "gender": "F", "name": "Ruby Moreno", "email": "rmoreno2f@homestead.com", "city": "Smiltene" },
        { "id": 89, "gender": "M", "name": "Joshua Matthews", "email": "jmatthews2g@about.me", "city": "Arrën" },
        { "id": 90, "gender": "M", "name": "Christopher Daniels", "email": "cdaniels2h@sourceforge.net", "city": "Farafenni" },
        { "id": 91, "gender": "M", "name": "Terry Willis", "email": "twillis2i@zdnet.com", "city": "Izumi" },
        { "id": 92, "gender": "F", "name": "Kelly Powell", "email": "kpowell2j@ca.gov", "city": "Mocoa" },
        { "id": 93, "gender": "M", "name": "Jesse Cole", "email": "jcole2k@walmart.com", "city": "Zhanlong" },
        { "id": 94, "gender": "M", "name": "Kevin Rogers", "email": "krogers2l@bbb.org", "city": "Banyuresmi" },
        { "id": 95, "gender": "F", "name": "Amy Vasquez", "email": "avasquez2m@hubpages.com", "city": "Oliveirinha" },
        { "id": 96, "gender": "F", "name": "Jean Carpenter", "email": "jcarpenter2n@hud.gov", "city": "Chang’an" },
        { "id": 97, "gender": "M", "name": "Samuel Greene", "email": "sgreene2o@constantcontact.com", "city": "Shilong" },
        { "id": 98, "gender": "F", "name": "Ruby Williams", "email": "rwilliams2p@blogspot.com", "city": "Yangpu" },
        { "id": 99, "gender": "M", "name": "Stephen Adams", "email": "sadams2q@china.com.cn", "city": "Klang" },
        { "id": 100, "gender": "M", "name": "Timothy Harrison", "email": "tharrison2r@drupal.org", "city": "Ovalle" }
    ];


    function toggleSideBar() {

        console.log("SideBar is getting Toggeled!");
        self.activeSideToggle = !self.activeSideToggle;
    }


    function selectUser(name) {
        console.log("The selected User is :", name);
        self.nameDisplay = name;
        $state.reload('home');
    }

}
app.config(function($stateProvider, $urlRouterProvider) {

    // $urlRouterProvider.otherwise('/home');

    $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================

        .state('home', {
        url: '/home',
        templateUrl: 'views/home.html',
        controller: 'HomeController as hc'
            /*,
                        controllerAs:'vm'*/
    })
});