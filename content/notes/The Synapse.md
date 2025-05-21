---
title: The Synapse
slug: the-synapse
---

# Terminologies

- **Polarity** - In Neuroscience, polarity can have two different meaning with respect to Neurons.
	- They have a polarised (charged) membrane due to a difference in electrical potentials (voltage) within and outside the cell.
	- Typically, neurons are considered to be polarised since the two ends of the cell - dendrites and axon, specialise in different actions.
- **Dendrites** - Tree-like structures (from Greek _déndron_, tree) that are present in one end of the neuron, receiving signals from other neurons.
- **Dendritic Arbor** - The total dendritic structure (branches and the trunk/cell body) of a neuron.
- **Axon** - A projection at one end of a typical neuron that specialises in transmitting signals to the dendrites of other neurons. Although, some neurons receive and transmit signals through their dendrites, making them axon-less.
- **Synapse** - The junction between neurons.
	- _Electrical Synapse_ - A porous region connecting two neurons, allowing charged ions to pass through, carrying electrical signals directly between the two cells (intercellular current); efficient at quick transmission but a less common type of synapse in the human nervous system.
	- _Chemical Synapse_ - The signal is transmitted through the passing of chemicals (neurotransmitters) via action potentials; these chemicals, taken up by the downstream neuron, may depolarise the neuron enough to send its own action potential or induce other effects. While less efficient in sending signals compared to its electrical counterpart, this interface allows for more complex signalling between neurons.
- **Synaptic Cleft** - A small, empty space (~20-40 nm) between the neurons that allow molecules to pass via diffusion.
- **Presynaptic Neuron** - Neuron sending the signal; upstream neuron.
- **Postsynaptic Neuron** - Neuron receiving the signal; downstream neuron.
- **Neurotransmitters** - Chemicals sent across the synaptic cleft.
- **Neuromodulators** - Substances that modulate the behaviour of neurons; e.g., Dopamine, Serotonin, Epinephrin.
- **Presynaptic Terminal** - Flared end of the axon closest to the synaptic cleft.
- **Postsynaptic Terminal** - End of the dendrite closest to the synaptic cleft.
- **Vesicles** - Hollow spherical molecular packaging structures made out of the same material as the cell membrane (lipids), used to transfer the neurotransmitters across the synaptic cleft.
- **Receptors** - Molecular machines that bind to a very specific class of signalling molecules, resulting in some change in the postsynaptic neuron.
	- _Ionotropic Receptors_ - Ion channels that are receptive to certain groups of ligands (like neurotransmitters), opening once they bind to their ligands(s) of interest; this binding allows ions to flow though and can potentially affect the polarity of the neuron depending on whether cations or anions flow through.
	- _Metabotropic Receptors_ - Set off molecular cascades (complex chains of action); this binding can alter gene expression within the postsynaptic cell.
- **Postsynaptic Potential** - Postsynaptic neuron’s response to a presynaptic signal.
	- _Excitatory Postsynaptic Potential (EPSP)_ - Signal received that puts it closer to its threshold, making it more likely to fire.
		- _mEPSP or minis_ - Random releases of neurotransmitters into the synaptic cleft that are not a result of an action potential stimulation.
	- _Inhibitory Postsynaptic Potential (IPSP)_ - Signal received that makes it less likely to fire.
- **Neuromuscular Junction (NMJ)** - A synaptic connection where nerves attach to muscles, similar to neuron-to-neuron synapses.
	- _End Plates_ - Flat structures where the nerves touch muscle fibres in an NMJ.
	- _End Plate Potentials (EPPs)_ - Response of an end plate to a signal it receives.
	- _mEPPs or minis_ - Random releases of molecules into an NMJ that are not the result of a direct stimulation.
- **Omega Bodies** - Vesicles that have fused into the presynaptic membrane and released their chemical payload into the synaptic cleft.
- **Docked Vesicles** - Vesicles sitting right behind the presynaptic membrane, ready to fuse and release their chemical payload. Other vesicles sit far back, waiting to be loaded and docked.
- **SNAREs** - Proteins on the vesicles and/or presynaptic membrane that interact with Calcium to enable vesicle fusion.
	- _v-SNAREs_ - SNARE proteins on the vesicles; Synaptobrevin.
	- _t-SNAREs (target)_ - SNARE proteins on the synaptic membrane; SNARE 25 and Syntaxin.

# Synaptic Transmission

**Electrical** - Simpler, allowing for direct (and therefore quicker) signal transmission between pores in connected neurons (intercellular current). This type of synapse is only able to transmit signals through voltage and their messages are largely unaltered between neurons. But since they are connected, it allows for bidirectional flow of signals, increasing synchronicity. They are often associated with multi-neuron circuits that require quickness, like those involved in escape reflexes.

**Chemical** - More common due to the complexity and diversity of the messages they are able to pass. A key element of this type of synapse is that the signal they pass influences the behaviour of the downstream neuron, making it more or less likely to spike. Although, the generation of an action potential by the downstream neuron after the arrival of an action potential from the upstream neuron is not guaranteed (generally happens though). Since these events are decoupled, the downstream neuron may require several action potentials, from different sources and/or in close succession, to generate one of its own. This type of synapse in unidirectional (barring a few exceptions).

# Anatomy of the Synapse

Synaptic (chemical) transmissions have 3 main steps:

1. An action potential travels down the axon of the signalling neuron towards the synapse.
2. Once the neuron is depolarised, the signal arrives at the presynaptic terminal, where the vesicles fuse into the membrane, releasing neurotransmitters into the synaptic cleft.
3. The molecules diffuse across the cleft and bind to the receptors on the postsynaptic terminal, which can result in some change in the receiving neuron.

# Presynaptic Terminal

How were the neurotransmitters released into the synapse? This question was answered (in the 1950s) by studying transduction at the NMJ, where neurons signal to muscles in order to control movement.

There were “blips” occurring between the EPPs that were recorded; all of about the same amplitude. These mEPPs occurred only when the electrode was placed in the postsynaptic fibre, meaning that this was a physiological phenomenon generated by the cell itself and not by the recording device. mEPPs are the result of a single vesicle payload being randomly released into the cleft, whereas EPPs come from one or more vesicle payload release(s), varying from stimulation to stimulation.

By observing signals transmitted through the NMJ in low Calcium environments and analysing the resulting relative amplitudes of the EPPs and mEPPs, it was concluded that the molecules in the chemical signals were being released in “packages”, rather than singularly, which Barnard Katz called _quanta_, since the vesicle structure was not directly observable back then.

Further experimentation with Calcium revealed the following:
- The amplitudes of the EPPs were approximately proportional to the fourth power of the concentration of Calcium.
- There was no EPP when the Calcium was injected after the presynaptic nerve was stimulated. This meant that Calcium needs to be present extracellularly when the action potential arrives.
- When the action potential arrives at the presynaptic terminal, voltage-gated Ca++ channels open. The strong driving force of Calcium quickly increases the Ca++ concentration, making the probability of neurotransmitter release higher. 

# SNAREs

The vesicle fusion mechanism is essential for many cell functions including the release of neurotransmitters and the trafficking of molecules, as in exocytosis and the trafficking of organelles within a cell. During this fusion process, other proteins bring the v-SNAREs and t-SNAREs together, power their interactions and then separate them post-fusion by way of a zippering mechanism that helps them to overcome the energy barrier. The SNARE protein _Synaptotagmin_ binds Calcium and speeds up vesicle release. Certain toxins, including Botulinum and Tetanus, can target, cleave and inactivate SNAREs.
