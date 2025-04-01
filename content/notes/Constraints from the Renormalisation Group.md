The bare self-coupling $\lambda^0$ of the Higgs Boson requires renormalisation. We obtain the renormalisation group equations (RGE).

For a theory involving a scalar field with quartic self-interactions, the RGE self-coupling $\lambda$ reads

$$\mu^{2} \frac{d}{d\mu^{2}}\lambda(\mu)=\beta_{\lambda}(\lambda(\mu))=\beta_{\lambda}^{(0)}\lambda^{2}+\mathcal{O}(\lambda^{3}),\text{ with }\beta_{\lambda}^{(0)}=\frac{3\lambda^{2}}{32\pi^{2}}$$.

This defines the $\beta$-function of the running self-coupling, which describes the running of the coupling with respect to the renormalisation scale. The $\beta$-function does not explicitly depend on the renormalisation scale; it depends on it implicitly through the coupling itself. To order $\lambda^{2}$, one obtains

$$\ln\left[ \frac{\mu^{2}}{\mu_{0}^{2}} \right]=\int^{\lambda(\mu)}_{\lambda(\mu_{0})} \frac{d\lambda}{\beta^{(0)}_{\lambda}\lambda^{2}}= \frac{1}{\beta^{(0)}_{\lambda}} \int^{\lambda(\mu)}_{\lambda(\mu_{0})} \frac{d\lambda}{\lambda^{2}}= \frac{1}{\beta^{(0)}_{\lambda}}\left( \frac{1}{\lambda(\mu)}-\frac{1}{\lambda(\mu_{0})} \right)$$.

In terms of the initial condition $\lambda(\mu_{0})$,

$$\lambda(\mu)= \frac{\lambda(\mu_{0})}{1-\beta_{\lambda}^{(0)}\lambda(\mu^{2}_{0})\ln\left( \frac{\mu^{2}}{\mu_{0}^{2}} \right)}$$.

(diagram)

#### RGE in the Standard Model

In SM, the $\beta$-function does not solely depend on $\lambda$; $\beta_{\lambda}=\beta_{\lambda}(\lambda,y_{t},g,g')$ depends on all the other couplings of the theory:

- top Yukawa coupling $y_t$
- $SU(2)_{L}$ gauge coupling $g$
- $U(1)_{Y}$ gauge coupling $g’$

The RGE for the self-coupling $\lambda$ in the SM to order $\lambda^{2},y_{t}^4,g^3,g'^4$ reads

$$\mu^{2} \frac{d}{d\mu^{2}}\lambda(\mu)=\beta_{\lambda}(\lambda(\mu),y_{t}(\mu),g(\mu),g'(\mu))$$

$$= \frac{1}{16\pi^{2}}\left[ 12\lambda^{2}-3y_{t}^4+6\lambda y_{t}^{2}- \frac{3\lambda}{2}(3g^{2}-g'^{2})+ \frac{3}{16}(2g^4+(g^{2}+g'^{2})^{2}) \right]+\mathcal{O}(\lambda^{3})$$.

#### Triviality Bound

At large values of $\lambda$,

$$\mu^{2} \frac{d}{d\mu^{2}}\lambda(\mu)=\beta_{\lambda}(\lambda)= \frac{3\lambda^{2}}{4\pi^{2}}$$.

Then, using the solution of the RGE, we find that the Landau pole of the Higgs self-coupling is located at 

$$\mu^*=v\text{ exp }\left( \frac{2\pi^{2}}{3\lambda(v)} \right)=v\text{ exp }\left( \frac{4\pi^{2}v^{2}}{3m^{2}_{h}} \right)$$.

Alternatively, we can claim that our theory should remain perturbative up to a given scale $\mu^*$. Then, the Higgs mass should satisfy the bound $$m_{h}\lesssim\sqrt{ \frac{4\pi^{2}v^{2}}{3\ln(\mu^*/v)} }$$.

This bound is commonly known as the _Triviality Bound_, since the only way to avoid a Landau pole altogether and to ensure that our theory remains perturbative at all scales is to have $\lambda(v)=0$, i.e., a trivial theory without interactions. 

#### Stability Bounds

The running of $\lambda$ poses another issue. We have assumed that $\lambda>0$ since the potential $V(\Phi)$ is assumed to be bounded from below. This is known as the stability condition. For $\lambda\ll 1$, the SM RGE might lead to $\lambda$ turning negative as the scale $\mu$ changes. Then, we can approximate the $\beta$-function as

$$\mu^{2} \frac{d}{d\mu^{2}}\lambda(\mu)=- \frac{1}{16\pi^{2}}\left( 3y_{t}^4- \frac{3}{16}(2g^4+(g^{2}+g'^{2})^{2}) \right)$$.

The solution to the RGE reads

$$\lambda(\mu)=\lambda(v)-\frac{1}{16\pi^{2}}\left( 3y^4_{t}-\frac{3}{16}(2g^4+(g^{2}+g'^{2})^{2}) \right)\ln\left( \frac{\mu^{2}}{v^{2}} \right)$$.

The stability condition $\lambda(v)>0$ then implies

$$m^{2}_{h}> \frac{v^{2}}{8\pi^{2}}\left( 3y^4_{t}-\frac{3}{16}(2g^4+(g^{2}+g'^{2})^{2}) \right)\ln\left( \frac{\mu^{2}}{v^{2}} \right)$$.

This gives us a lower bound on the Higgs mass of $m_{h}\gtrsim 70\text{ GeV}$ for scales $\mu<1\text{ TeV}$ and $m_{h}\gtrsim 130\text{ GeV}$ for scales $\mu<10\text{ TeV}$.