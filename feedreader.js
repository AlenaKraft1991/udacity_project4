/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        //--------------------------1. Sequential for loop URL---------------------------
        it('url is filled', function () {
            var URLLength = allFeeds.length;
            for (var i = 0; i < URLLength; i++) {
                expect(URLLength).toBeDefined();
                expect(URLLength.length).not.toBe(0);
            };
        });
        //--------------------------2. Array.prototype.forEach URL---------------------------
        // it('url is filled', function(){
        //     allFeeds.forEach(function(feed){
        //         feedURL = feed.url;
        //             expect(feedURL).toBeDefined(); 
        //             expect(feedURL.length).not.toBe(0);
        //         });
        // });
        //--------------------------3. for ...of URL---------------------------
        // it('has an URL defined and not empty', function () {
        //     for (feed of allFeeds) {
        //         expect(feed.url).toBeDefined();
        //         expect(feed.url.length).not.toBe(0);
        //     };
        // });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        //--------------------------1. Sequential for loop NAME---------------------------
        it('name is filled', function () {
            var NameLength = allFeeds.length;
            for (var i = 0; i < NameLength; i++) {
                expect(NameLength).toBeDefined();
                expect(NameLength.length).not.toBe(0);
            };
        });
    });


    /* TODO: Write a new test suite named "The menu" */

    /* TODO: Write a test that ensures the menu element is
     * hidden by default. You'll have to analyze the HTML and
     * the CSS to determine how we're performing the
     * hiding/showing of the menu element.
     */
    describe('the menu', function () {
        let body = document.getElementsByTagName('body'[0]);
        it('hidden by default', function () {
            //classList returns the class name(s) of an element: useful to add, remove and toggle CSS classes like "menu-hidden"
            expect(body.classList.contains('menu-hidden')).toBe(true); 
        }); 

        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('toggle on', function () {
            let icon = document.getElementsByClassName('menu-icon-link'[0]);

            menuIcon.click();
            expect(body.classList.contains('menu-hidenn')).toBe(true); 
            menuIcon.click();
            expect(body.classList.contains('menu-hidenn')).toBe(false); 
             });
         });
    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function () {
    /* TODO: Write a test that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     * Remember, loadFeed() is asynchronous so this test will require
     * the use of Jasmine's beforeEach and asynchronous done() function.
     */
        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            });
        });

        it('load feed function is called', function () {
            let feed = document.querySelector('.feed'); // querySelector: returns the first element that is a descendant of the element
            let entry = document.querySelector('.entry'); // querySelector: returns the first element that is a descendant of the element
            expect(feed.entry).toBeGreaterThan(0); 
            expect(feed.length).toBeGreaterThan(0); 
            // expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });


    /* TODO: Write a new test suite named "New Feed Selection" */

    /* TODO: Write a test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * Remember, loadFeed() is asynchronous.
     */
    describe('New Feed Selection', function () {
        let feedone; 
        let feedtwo; 

        beforeEach(function(done){
            loadFeed(0,function(){
                feedone = document.getElementsByClassName('feed')[0].innerHTML;
                loadFeed(1,function(){
                    feedtwo = document.getElementsByClassName('feed')[0].innerHTML;
                    done(); 
                });
            });
        });

        it('if the feeds differ', function() {
            expect(feedone).not.toEqual(feedtwo);
        });
    });
}());