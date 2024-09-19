---
title: Time Series Data Analysis in R
draft: false
tags:
  - PECO104
  - time-series
---
# #automation Importing multiple sheets

What if you had multiple sheets in the same excel file, and you needed to import all of them and apply some sort of descriptive statistics.

We automate this process by using a bit of programming. There are quite a few things that we can use to achieve this task . Three of them are:

1. Using loops
2. Using `lapply`
3. Using the `RIO` package

> [!Tip] The RIO package

# Plot multiple `data.frame`s


``` r title="main.r" {2,5,7}
ggplot(data_keys, aes(x = Date)) +
	geom_line(aes(y=Min, colour="Min"),linetype="dashed") +
	geom_line(aes(y=Max, colour="Max"),linetype="dashed") +
	geom_line(aes(y=Modal, colour="Modal"),linetype="dashed") +
	scale_color_manual(name = 'Price Series', values=c("Min"="tomato", "Max"="royalblue", "Modal"="black")) + 
	facet_wrap(vars(keys))
```

## Separate Plots

``` r title="separate.r" {13}
for(i in names(data)) {
df1 <- as.data.frame(data[[i]])
plotdf1 <- ggplot(df1, aes(x = Date)) +
	geom_line(aes(y=Min, colour="Min"),linetype="dashed") +
	geom_line(aes(y=Max, colour="Max"),linetype="dashed") +
	geom_line(aes(y=Modal, colour="Modal"),linetype="dashed") +
	scale_color_manual(name = 'Price Series', values=c("Min"="tomato", "Max"="royalblue", "Modal"="black")) + 
	labs(x="Date",y="Value",title=paste(i,"Prices")) +
	theme(legend.position="inside",legend.position.inside=c(0.09,0.828))

png(file.path(img,paste(i,'png',sep='.')))
print(plotdf1)
dev.off()
}
```

`def.off()` is used to signify that there has been an end of input into the *png* file, more like a `flush` function that is used in file handling.




