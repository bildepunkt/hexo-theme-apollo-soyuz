Hexo theme: Apollo-Soyuz
========================

This hexo theme is a fork from http://github.com/joyceim/hexo-theme-apollo/

[Demo](http://bildepunkt.com)

### Install
Run this command from inside your hexo project
``` bash
$ git clone https://github.com/c-concat-p/hexo-theme-apollo-soyuz.git themes/apollo-soyuz
```

**Apollo requires Hexo 2.4 and above.**

### Update
``` bash
cd themes/apollo-soyuz
git pull
```

## Configuration
``` yml
# Header
menu:
    Home: /
    Archives: /archives
rss: /atom.xml

# Content
excerpt_link: Read More

# Miscellaneous
google_analytics: UA-########-#
favicon: /favicon.png
```

- **menu** - Navigation menu
- **rss** - RSS link
- **excerpt_link** - "Read More" link at the bottom of excerpted articles. `false` to hide the link.
- **google_analytics** - Google Analytics ID
- **favicon** - Favicon path
