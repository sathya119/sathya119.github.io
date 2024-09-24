---
title: Duopoly Markets contd.
draft: false
tags:
  - PECO101
date: 2024-09-23T10:15:00
---
# 2. Collusion Markets

## Collusion Solution

In this model, the [[duopolist]] collide with each other and try tom maximize the total profit instead of individual profit, then, they will distribute the profit among themselves according to the output which they produce.

Thus, this will maximize $\Pi = \Pi_1 + \Pi_2$
$$
= R_1 - C_1 + R_2 - C_2
$$

w.r.t $q_1$ and $q_2$ for which [[First Order Condition|F.O.C]] are

$$
\dfrac{\partial{\Pi}}{\partial{q_1}} = 0 \qquad
\dfrac{\partial{\Pi}}{\partial{q_2}} = 0
$$
Solving them, we get individual output $q_1$ and $q_2$ and from which we get individual profits $\Pi_1$ and $\Pi_2$.

$$
\begin{align*}
\Pi_1 &= 100q_1 - 0.5q_1(q_1 + q_2) - 5q_1\\
\Pi_2 &= 100q_2 - 0.5q_2(q_1 + q_2) - 0.5q_2^2\\
\Pi = \Pi_1 + \Pi_2 &= 100(q_1+q_2) - 0.5(q_1+q_2)^2 - 5q_1 - 0.5q_2^2
\end{align*}
$$

$\therefore$ [[First Order Condition|F.O.C]]

$$
\dfrac{\partial{\Pi}}{\partial{q_1}} = 0 \qquad
\dfrac{\partial{\Pi}}{\partial{q_2}} = 0
$$

$$
\begin{align*}
&100 - (q_1 + q_2) - 5 \\
\tag{1}
\implies&q_1 + q_2 = 95\\
\\
&100 - (q_1 + q_2) - q_2 = 0\\
\tag{2}
\implies&q_1 + 2q_2 = 100\\
\end{align*}
$$

From (1) and (2), we get $q_2 = 5$ and $\therefore q_1 = 90$

Now, we calculate the profits:

$$
\begin{align*}
P &= 100 - 0.5 \times 95 &= 52.5\\
\Pi_1 &= 52.5 \times 90 - 5 \times 90 &= 4275\\
\Pi_2 &= 52.5 \times 5 - 0.5 \times 25 &= 250\\
\end{align*}
$$

```math-tex
P = 100 - 0.5(95)
q1 = 90
q2 = 5
P1 = P*q1 - 5q1
P2 = P*q2 - 0.5q2^2
```


# 3. [[Coward Model]]

In this model, the basic assumption is that each [[duopolist]] will maximize his profit assuming that his rival’s actions are invariant under his own actions.
Thus, duopolist $I$ maximizes $\Pi_1$ w.r.t $q_1$ treating $q_2$ as a parameter.

Similarly, [[duopolist]] $II$ will maximize $\Pi_2$ w.r.t $q_2$ treating $q_1$ as a parameter.

We maximize $\Pi_1 = R_1 - C_1$ w.r.t $q_1$, and thus $\dfrac{\partial{\Pi_1}}{\partial{q_1}} = \dfrac{\partial{R_1}}{\partial{q_1}} - \dfrac{\partial{C_1}}{\partial{q_1}} = 0$.

Upon solving this, we will get solution for $q_1$ in terms of $q_2$ as $q_1 = \Phi(q_2)$.

Thus, the function gives $I$’s output if $II$’s output is known. This will tell how $I$ will react for each action of $II$. Thus, it is called [[reaction function]] for $I$ . Similarly, for $II$ , $\Pi_2 = R_2 - C_2$ we get $q_2$.

So, $\dfrac{\partial{\Pi_2}}{\partial{q_2}} = \dfrac{\partial{R_2}}{\partial{q_2}} - \dfrac{\partial{C_2}}{\partial{q_2}} = 0$

 $\implies \dfrac{\partial{R_2}}{\partial{q_2}} = \dfrac{\partial{C_2}}{\partial{q_2}}$ solving which we get the [[reaction function]] of $II$ as $q_2 = \Phi(q_1)$ which gives output for $II$ for given output of $I$.

If $q_1$ and $q_2$ can be formed such that both the [[reaction function]]s are satisfied there there will be [[equilibrium]] otherwise there will be disequilibrium.


## Example
$$
P = 100 - 0.5(q_1 + q_2),\quad c_1 = 5q,\quad c_2 = 0.5q_2^2
$$

We will find the [[reaction function]]s for both the firms.

$$
\begin{align*}
\Pi_1 &= 100q_1 - 0.5q_1^2 - 0.5q_1q_2 - 5q_1\\
\dfrac{\partial{\Pi_1}}{\partial{q_1}} &= 100- q_1 - 0.5q_2 - 5\\
\\
\tag{1}
\therefore q_1 &= 95 - 0.5q_2
\end{align*}
$$
which is the [[reaction function]] of firm $I$.

Similarly,

$$
\begin{align*}
\Pi_2 &= 100q_2 - 0.5q_1q_2 - 0.5q_2^2 - 0.5q_2^2\\
\dfrac{\partial{\Pi_2}}{\partial{q_2}} &= 100 - 0.5q_1 - 2q_2\\
\\
\tag{2}
\therefore q_2 &= 50 - 0.25q_1
\end{align*}
$$
which is the [[reaction function]] for firm $II$.


Solving (1) and (2), we get $q_1 = 80$, $q_2 = 30$, $\Pi_1 = 3200$ and $\Pi_2 = 900$.

```math-tex
q1 = 80
q2 = 30
pi1 = 100*q1 - 0.5*q1^2  - 0.5*q1*q2 - 5*q1
pi2 = 100*q2 - 0.5*q1*q2  - q2^2
```

^b6f6d4

Thus there is [[Coward Equilibrium]].

# 4. Stackelberg Model

> [!tldr]
> In a [[Coward Model]] situation, if one of them turns out to be a leader, to independently make the first move => [[Stackelberg Model]]

Let $\Pi_1 = \Pi_1(q_1,q_2)$, $\Pi_2 = \Pi_2(q_1,q_2)$ be the  profit of the [[duopolist]]

Let $q_1 = \Psi_1(q_2)$ be the [[reaction function]] of $I$

$\qquad q_2 = \Psi_2(q_1)$  be the [[reaction function]] of $II$

Suppose $I$ wants to be leader then, he assumes that $II$ will be following leadership of $I$.

$\therefore\qquad$ $I$’s $\Pi$ function will be given

$\quad\qquad \Pi_1 = \Pi_1(q_1,\Psi_2(q_1))$ which is a function of $q_1$ only

$I$ will maximize this w.r.t. $q_1$ and get this leadership profit and leadership output. Similarly, $II$ will compete his leadership output and profit by assuming that $II$ is following through leadership function of $I$.

Suppose $I$ wants to be follower then he will accept $II$’s leadership output and his followership profit.

Similarly $I$ will compete with his followership profit.

By comparing the leadership profit and followership profit, each [[duopolist]] will decide the role to be a leader or to be a follower, depending on whichever is advantageous.


> [!Example] There are four possibilities given
> 1. $I$ -> L, $II$ -> F ✅
> 2. $I$ -> F, $II$ -> L ✅
> 3. $I$ -> L, $II$ -> L ❌
> 4. $I$ -> F, $II$ -> F ❌
>    
> From the four possibilities, we can observe that there cannot be [[equilibrium]] in (3) and (4) cases, there can be equilibrium only if $I$ accepts the leadership of the other as in case of (1) and (2)

## Example

$P = 100 - 0.5[q_1 + q_2]$ be the demand function

Let $c_1 = 5q_1$ ;$\quad c_2 = 0.5q_2^2$ be the cost function

[[reaction function|Reaction fn.]] are $q_1 = 95 - 0.5q_2$ for $I$

$\qquad\qquad\qquad\quad$  $q_2 = 50 - 0.25q_1$ for $II$

$I$’s profit is $\Pi_1 = 100q_1 - 0.5q_1^2 - 0.5q_1q_2 -5q_1$

If $I$ wants to be leader then $I$’s $\Pi$ will be given by

$$
\begin{align*}
\Pi_1 &= 100q_1 - 0.5q_1^2 -0.5q_1(0.5 - 0.25q_1) - 5q_1\\
&=70q_1 - 0.375q_1^2
\end{align*}
$$

For maximizing $\Pi_1$, $\dfrac{\partial{\pi_1}}{\partial{q_1}} = 70 - 0.75q_1 = 0$
$$
\therefore q_1 = \dfrac{70}{0.75} = 93\frac{1}{3}
$$
Thus, $q_1^L = 93\frac{1}{3}$ 
$$
\therefore \Pi_1^L = 70\left(93\dfrac{1}{3}\right) - 0.375\left(93\frac{1}{3}\right) = 3266\frac{2}{3}
$$

Similarly we get,
$$
\begin{align*}
q_2^L &= 35\\
\Pi_2^L &= 918.75\\
q_1^L &= 93\frac{1}{3}\\
\Pi_1^L &= 3266\frac{2}{3}\\
\end{align*}
$$

Suppose $I$ is follower then he accepts $II$’s leadership output $35$ and hence his followership output will be[^reaction]  $q_1^F = 95 - 0.5(35) = 77.5$. If this is substituted in $I$’s profit function then $\Pi_1^F = 70(77.5) - 0.375(77.5)^2 = 3003.125$

```math-tex
q_1 = 95 - 0.5*35
q_2 = 35
Profit_1 = 100q_1 - 0.5*q_1^2 - 0.5*q_1*q_2 - 5q_1
```

Now, if $II$ is a follower then he accepts $I$’s leadership output $93\frac{1}{3}$ and hence his followership output will be [^reaction] $q_2^F = 50-0.25(93\frac{1}{3}) =26\frac{2}{3}$. 

The profit of $II$ is given by 
$$
\Pi_2 = 100q_2 - 0.5q_1q_2 - q_2^2
$$
So, the followership profit of $II$ is given by $\Pi_2^F = 711.11$

```math-tex
q_1 = 93+1/3
q_2 = 50 - 0.25*93.333
Profit_2 = 100*q_2 - 0.5*q_1*q_2 - q_2^2
```

[^reaction]: By substituting in the [[reaction function]] of the other firm