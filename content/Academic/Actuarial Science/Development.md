---
title: Development
draft: false
tags:
  - EXAM5
date: 2024-09-21
---

> [!SUCCESS] GOAL: Estimate **Ultimate** values of premium and loss data

- Understand the environment (internal and external)
- There can be changes[^changes], understand them thoroughly
- Needs discussion!

> [!example]- Things to discuss with various departments of Insurer (CUDRI) #memo
> 
> This might be more applicable to **consulting actuaries**
> 
> - Claims
> 	- how do you handle unpaid claims?
> 	- did your reserving process change?
> - Underwriting
> 	- did the business composition change?
> 	- were there any large risks?
> - Data processing/accounting
> 	- how do you handle claim payments?
> 	- what do you do in case of partial payments?
> 	- how accurate are your data sources?
> - Ratemaking actuaries
> 	- why did you deviate from standard ratemaking procedures?
> 	- what data did you use?
> 	- what were the recent rate filings?
> - In-house actuaries
> 	- can I get the copy of the actuarial study held?
> 	- can I get more background on why did you select this (ratio)?

#todo Create a list of 3 questions to ask each executive from [[Friedland’s Reserving Book]]

# Development Triangles

- See the changes in claims data over time
- **age** and [[valuation date]]

Let’s first query the claims database and aggregate data by **accident year** (the year now is 2028)

## AY2024

- collect data for AY2024 in 12-month intervals
- a/o 2024-12-31 `ABC` paid $108M on all accidents (occurring from 2024-01-01)
	- age: 12 months
	- [[valuation date]]: 2024-12-31

| Accident Year | Cumulative Paid Claims by Age ($US Millions) |           |           |           |
| ------------- | -------------------------------------------- | --------- | --------- | --------- |
|               | 12 Months                                    | 24 Months | 36 Months | 48 Months |
| 2024          | 108                                          | 128       | 144       | 180       |

We are basically looking at the claims that happened in 2024 in their respective ages.

Now, we do the same for **AY2025**, **AY2026** and **AY2027** (we have data for every year). So, we get a triangle

|      | 12 Months | 24 Months | 36 Months | 48 Months |
| ---- | --------- | --------- | --------- | --------- |
| 2024 | 108       | 128       | 144       | 180       |
| 2025 | 100       | 121       | 152       |           |
| 2026 | 108       | 150       |           |           |
| 2027 | 112       |           |           |           |
`
That’s all! That’s the development triangle.

## Reading the Development Triangle

- If we want to look at all claims that happened a/o a specific year, let’s say 2021, then all we need to do is **read the upward sloping diagonal** 
	- which in this case are `112 150 152 180`
	- note that these are cumulative values, so summing them up will give


[^changes]: class of business written, policy provisions, claims management philosophy, social and economic environments