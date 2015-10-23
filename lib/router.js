Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function(){
//    Posts
    this.route('posts', {
        path: '/',
        template: 'posts'
    });

    this.route('about');

    this.route('profile');
});
