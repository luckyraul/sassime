# SASSime
Tiny Sass Framework

### Texts

#### text-align ```%txt-$var``` in $text
```scss
@extend %txt-left;
//text-align: left;
@extend %txt-right;
//text-align: right;
@extend %txt-center_tablet;
//@media screen and (min-width: 768px) { text-align: center; }
```

#### text-decoration ```%decor-$var``` in $text-decor
```scss
@extend %decor-none;
//text-decoration: none;
@extend %decor-underline;
//text-decoration: underline;
@extend %txt-line-through_tablet;
//@media screen and (min-width: 768px) { text-decoration: line-through; }
```

#### text-transform ```$var``` in $text-transform
```scss
@extend %capital;
//text-transform: capitalize;
@extend %upper;
//text-transform: uppercase;
@extend %lower_tablet;
//@media screen and (min-width: 768px) { text-transform: lowercase; }
```

#### font-family ```%ff-$var``` in $fonts
```scss
@extend %ff-main;
//font-family: 'Arial';

@extend %ff-header_tablet;
//@media screen and (min-width: 768px) { font-family: 'Georgia'; }
```

#### font-size ```%fs-$var``` in $fontsize
```scss
@extend %fs-12;
//font-size: 0.75rem

@extend %fs-16_tablet;
//@media screen and (min-width: 768px) { font-size: 1rem; }
```

### Visuals

#### display ```$var``` in $display
```scss
@extend %hide;
//display: none;
@extend %flex;
//display: flex;
@extend %block_tablet;
//@media screen and (min-width: 768px) { display: block; }
```

#### position ```$var``` in $position
```scss
@extend %absolute;
//position: absolute;
@extend %static;
//position: static;
@extend %relative_tablet;
//@media screen and (min-width: 768px) { position: relative; }
```


#### float ```fl-$var``` in $float
```scss
@extend %fl-left;
//float: left;
@extend %fl-right;
//float: right;
@extend %fl-left_tablet;
//@media screen and (min-width: 768px) { float: left; }
```

#### visibility ```vs-$var``` in $visibility
```scss
@extend %vs-hidden;
//visibility: hidden;
@extend %vs-visible;
//visibility: visible;
@extend %vs-collapse_tablet;
//@media screen and (min-width: 768px) { visibility: collapse; }
```


### Colours

#### color ```%color-$var``` in $colors
```scss
@extend %color-white;
//color: #fff;
@extend %color-grey7;
//color: #777;
@extend %color-black_tablet;
//@media screen and (min-width: 768px) { color: #000; }
```

#### background-color ```%bg-$var``` in $colors
```scss
@extend %bg-white;
//background-color: #fff;
@extend %bg-grey7;
//background-color: #777;
@extend %bg-black_tablet;
//@media screen and (min-width: 768px) { background-color: #000; }
```

#### border ```%border-$var``` in $colors
```scss
@extend %border-white;
//border: 1px solid #fff;
@extend %border-grey7;
//border: 1px solid #777;
@extend %border-black_tablet;
//@media screen and (min-width: 768px) { border: 1px solid #000; }
```

#### border top, left, right, bottom ```%border-%pos-$var``` in $colors
```scss
@extend %border-t-white;
//border-top: 1px solid #fff;
@extend %border-r-grey7;
//border-right: 1px solid #777;
@extend %border-b-black_tablet;
//@media screen and (min-width: 768px) { border-bottom: 1px solid #000; }
```
