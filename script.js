document.addEventListener('DOMContentLoaded', () => {

    /* =========================================
       1. BASE DE DONNÉES COMPLÈTE
       ========================================= */
    const dbPlantes = {
        "P1": {
            nom: "Lavande Vraie", sci: "Lavandula angustifolia", com: "Lavande officinale", fam: "Lamiacées", zone_dist: "Sud de l'Europe",
            type: "Sous-arbrisseau vivace", taille_glob: "30-60 cm", forme: "Boule compacte", aspect: "Argenté", origine: "Méditerranée", 
            sol: "calcaire", exi: "soleil", eau: "faible", taille: "moyenne", entretien: "faible",
            f_type: "Simples", f_forme: "Linéaires", f_taille: "2-4 cm", f_coul: "Gris-vert", f_disp: "Opposées",
            t_type: "Ligneuse/Herbacée", t_coul: "Grise", t_tex: "Quadrangulaire", t_poil: "Tomenteuse", t_epi: "Aucune", t_carac: "Aromatique",
            fl_inf: "Épi terminal", fl_taille: "1 cm", fl_forme: "Bilabiée", fl_coul: "Violet", fl_odeur: "Florale et herbacée", fl_per: "Juin-Août",
            cyc_type: "Vivace", cyc_vie: "15-20 ans", cyc_rep: "Bouturage", det_part: "Parfumerie", det_prob: "Pourriture"
        },
        "P2": {
            nom: "Fougère Scolopendre", sci: "Asplenium scolopendrium", com: "Langue de cerf", fam: "Aspléniacées", zone_dist: "Europe, Asie",
            type: "Fougère vivace", taille_glob: "40-60 cm", forme: "Rosette", aspect: "Luisant", origine: "Hémisphère Nord", 
            sol: "humifère", exi: "ombre", eau: "élevé", taille: "moyenne", entretien: "modéré",
            f_type: "Simples", f_forme: "Lancéolée", f_taille: "15-60 cm", f_coul: "Vert vif", f_disp: "Rosette",
            t_type: "Pétiole rigide", t_coul: "Brun", t_tex: "Écailleuse", t_poil: "Écailles", t_epi: "Aucune", t_carac: "Sores au revers",
            fl_inf: "Sores (spores)", fl_taille: "N/A", fl_forme: "Linéaire", fl_coul: "Brun", fl_odeur: "Terre humide", fl_per: "Été",
            cyc_type: "Ptéridophyte", cyc_vie: "20 ans", cyc_rep: "Spores", det_part: "Médicinale", det_prob: "Limaces"
        },
        "P3": {
            nom: "Romarin Officinal", sci: "Salvia rosmarinus", com: "Romarin", fam: "Lamiacées", zone_dist: "Méditerranée",
            type: "Arbuste", taille_glob: "1.5 m", forme: "Érigée", aspect: "Dense", origine: "Sud Europe", 
            sol: "sableux", exi: "soleil", eau: "faible", taille: "grande", entretien: "faible",
            f_type: "Simples", f_forme: "Linéaires", f_taille: "2-3 cm", f_coul: "Vert sombre", f_disp: "Opposées",
            t_type: "Ligneuse", t_coul: "Brune", t_tex: "Exfoliante", t_poil: "Pubescente", t_epi: "Aucune", t_carac: "Camphré",
            fl_inf: "Grappes", fl_taille: "1.2 cm", fl_forme: "Bilabiée", fl_coul: "Bleu", fl_odeur: "Puissante et résineuse", fl_per: "Printemps",
            cyc_type: "Arbrisseau", cyc_vie: "30 ans", cyc_rep: "Semis", det_part: "Cuisine", det_prob: "Chrysomèle"
        },
        "P4": {
            nom: "Hellébore Noire", sci: "Helleborus niger", com: "Rose de Noël", fam: "Renonculacées", zone_dist: "Alpes",
            type: "Vivace", taille_glob: "30 cm", forme: "Touffe", aspect: "Coriace", origine: "Europe Centrale", 
            sol: "humifère", exi: "mi-ombre", eau: "élevé", taille: "moyenne", entretien: "modéré",
            f_type: "Composées", f_forme: "Palmée", f_taille: "15 cm", f_coul: "Vert foncé", f_disp: "Basale",
            t_type: "Hampe charnue", t_coul: "Vert tacheté", t_tex: "Lisse", t_poil: "Aucune", t_epi: "Aucune", t_carac: "Toxique",
            fl_inf: "Cyme", fl_taille: "6 cm", fl_forme: "Coupe", fl_coul: "Blanc", fl_odeur: "Inodore", fl_per: "Hiver",
            cyc_type: "Vivace", cyc_vie: "15 ans", cyc_rep: "Semis", det_part: "Hivernale", det_prob: "Taches noires"
        },
        "P5": {
            nom: "Hortensia", sci: "Hydrangea macrophylla", com: "Hortensia", fam: "Hydrangéacées", zone_dist: "Asie Est",
            type: "Arbuste caduc", taille_glob: "1.5 m", forme: "Boule", aspect: "Massif", origine: "Japon", 
            sol: "acide", exi: "mi-ombre", eau: "modéré", taille: "grande", entretien: "modéré",
            f_type: "Simples", f_forme: "Ovale", f_taille: "15 cm", f_coul: "Vert", f_disp: "Opposées",
            t_type: "Ligneuse", t_coul: "Gris", t_tex: "Lisse", t_poil: "Glabre", t_epi: "Aucune", t_carac: "Caduc",
            fl_inf: "Corymbe", fl_taille: "20 cm", fl_forme: "Boule", fl_coul: "Rose/Bleu", fl_odeur: "Neutre", fl_per: "Été",
            cyc_type: "Arbuste", cyc_vie: "40 ans", cyc_rep: "Bouturage", det_part: "Sol dépendant", det_prob: "Oïdium"
        },
        "P6": {
            nom: "Hosta de Siebold", sci: "Hosta sieboldiana", com: "Hosta", fam: "Hostacées", zone_dist: "Asie",
            type: "Vivace", taille_glob: "60 cm", forme: "Étalée", aspect: "Large", origine: "Japon", 
            sol: "argileux", exi: "ombre", eau: "modéré", taille: "moyenne", entretien: "faible",
            f_type: "Simples", f_forme: "Cordiforme", f_taille: "30 cm", f_coul: "Bleuté", f_disp: "Rosette",
            t_type: "Hampe", t_coul: "Verte", t_tex: "Lisse", t_poil: "Glabre", t_epi: "Aucune", t_carac: "Pruine",
            fl_inf: "Grappe", fl_taille: "5 cm", fl_forme: "Entonnoir", fl_coul: "Mauve", fl_odeur: "Suave", fl_per: "Juillet",
            cyc_type: "Vivace", cyc_vie: "20 ans", cyc_rep: "Division", det_part: "Feuillage", det_prob: "Limaces"
        },
        "P7": {
            nom: "Thym Commun", sci: "Thymus vulgaris", com: "Thym", fam: "Lamiacées", zone_dist: "Europe Sud",
            type: "Arbrisseau", taille_glob: "25 cm", forme: "Coussin", aspect: "Tortueux", origine: "Méditerranée", 
            sol: "drainé", exi: "soleil", eau: "faible", taille: "petite", entretien: "faible",
            f_type: "Simples", f_forme: "Lancéolée", f_taille: "5 mm", f_coul: "Gris-vert", f_disp: "Opposées",
            t_type: "Ligneuse", t_coul: "Brune", t_tex: "Rugueuse", t_poil: "Courts", t_epi: "Aucune", t_carac: "Odorant",
            fl_inf: "Glomérules", fl_taille: "4 mm", fl_forme: "Bilabiée", fl_coul: "Rose", fl_odeur: "Aromatique", fl_per: "Printemps",
            cyc_type: "Persistant", cyc_vie: "8 ans", cyc_rep: "Semis", det_part: "Aromatique", det_prob: "Humidité"
        },
        "P8": {
            nom: "Fuchsia", sci: "Fuchsia magellanica", com: "Fuchsia", fam: "Onagracées", zone_dist: "Chili",
            type: "Arbuste", taille_glob: "1.2 m", forme: "Retombante", aspect: "Gracieux", origine: "Amérique Sud", 
            sol: "neutre", exi: "mi-ombre", eau: "élevé", taille: "grande", entretien: "élevé",
            f_type: "Simples", f_forme: "Ovale", f_taille: "4 cm", f_coul: "Vert/Rouge", f_disp: "Opposées",
            t_type: "Ligneuse fine", t_coul: "Rouge", t_tex: "Exfoliante", t_poil: "Glabre", t_epi: "Aucune", t_carac: "Souple",
            fl_inf: "Pendantes", fl_taille: "5 cm", fl_forme: "Clochette", fl_coul: "Bicolore", fl_odeur: "Inodore", fl_per: "Été",
            cyc_type: "Vivace", cyc_vie: "15 ans", cyc_rep: "Bouturage", det_part: "Décoratif", det_prob: "Pucerons"
        },
        "P9": {
            nom: "Rosier Buisson", sci: "Rosa hybrida", com: "Rosier", fam: "Rosacées", zone_dist: "Hémisphère Nord",
            type: "Arbuste caduc", taille_glob: "1.2 m", forme: "Buisson", aspect: "Épineux", origine: "Monde", 
            sol: "argileux", exi: "soleil", eau: "modéré", taille: "grande", entretien: "élevé",
            f_type: "Composées", f_forme: "Pennées", f_taille: "10 cm", f_coul: "Vert", f_disp: "Alternes",
            t_type: "Ligneuse", t_coul: "Brun", t_tex: "Rugueuse", t_poil: "Nulle", t_epi: "Aiguillons", t_carac: "Florifère",
            fl_inf: "Cyme", fl_taille: "10 cm", fl_forme: "Coupe", fl_coul: "Variée", fl_odeur: "Sucrée", fl_per: "Été",
            cyc_type: "Vivace", cyc_vie: "25 ans", cyc_rep: "Greffe", det_part: "Parfumé", det_prob: "Mildiou"
        },
        "P10": {
            nom: "Cyclamen", sci: "Cyclamen persicum", com: "Cyclamen", fam: "Primulacées", zone_dist: "Méditerranée",
            type: "Vivace tubéreuse", taille_glob: "25 cm", forme: "Bouquet", aspect: "Délicat", origine: "Orient", 
            sol: "humifère", exi: "ombre", eau: "modéré", taille: "petite", entretien: "modéré",
            f_type: "Simples", f_forme: "Cordiforme", f_taille: "8 cm", f_coul: "Argenté", f_disp: "Rosette",
            t_type: "Pédicelles", t_coul: "Rouge", t_tex: "Lisse", t_poil: "Nulle", t_epi: "Aucune", t_carac: "Enroulé",
            fl_inf: "Solitaire", fl_taille: "3 cm", fl_forme: "Réfléchie", fl_coul: "Rose", fl_odeur: "Délicate", fl_per: "Hiver",
            cyc_type: "Géophyte", cyc_vie: "20 ans", cyc_rep: "Semis", det_part: "Hivernale", det_prob: "Pourriture"
        },
        "P11": {
            nom: "Buis", sci: "Buxus sempervirens", com: "Buis", fam: "Buxacées", zone_dist: "Europe",
            type: "Arbuste persistant", taille_glob: "3 m", forme: "Boule", aspect: "Dense", origine: "Europe", 
            sol: "calcaire", exi: "soleil", eau: "faible", taille: "grande", entretien: "modéré",
            f_type: "Simples", f_forme: "Ovale", f_taille: "2 cm", f_coul: "Vert sombre", f_disp: "Opposées",
            t_type: "Bois dur", t_coul: "Gris", t_tex: "Gercée", t_poil: "Pubescents", t_epi: "Aucune", t_carac: "Lent",
            fl_inf: "Glomérules", fl_taille: "2 mm", fl_forme: "Apétale", fl_coul: "Jaune", fl_odeur: "Amère", fl_per: "Printemps",
            cyc_type: "Persistant", cyc_vie: "600 ans", cyc_rep: "Bouturage", det_part: "Topiaire", det_prob: "Pyrale"
        },
        "P12": {
            nom: "Camélia", sci: "Camellia japonica", com: "Camélia", fam: "Théacées", zone_dist: "Asie",
            type: "Arbuste persistant", taille_glob: "3 m", forme: "Pyramide", aspect: "Noble", origine: "Japon", 
            sol: "acide", exi: "mi-ombre", eau: "modéré", taille: "grande", entretien: "modéré",
            f_type: "Simples", f_forme: "Elliptique", f_taille: "9 cm", f_coul: "Vert vernis", f_disp: "Alternes",
            t_type: "Ligneuse", t_coul: "Gris-brun", t_tex: "Lisse", t_poil: "Glabre", t_epi: "Aucune", t_carac: "Rigide",
            fl_inf: "Solitaire", fl_taille: "10 cm", fl_forme: "Double", fl_coul: "Rouge", fl_odeur: "Inodore", fl_per: "Hiver",
            cyc_type: "Persistant", cyc_vie: "100 ans", cyc_rep: "Marcottage", det_part: "Prestige", det_prob: "Cochenille"
        }
    };

    /* =========================================
       2. LOGIQUE CATALOGUE (plantes.html)
       ========================================= */
    const grid = document.getElementById('plants-grid');
    const searchInput = document.querySelector('.search-input');
    const filterForm = document.getElementById('filter-form');

function updateDisplay() {
        // On ne lance la fonction que si on est sur la page avec la grille et le formulaire
        if (!grid || !filterForm) return; 
        
        const query = searchInput ? searchInput.value.toLowerCase() : "";
        const formData = new FormData(filterForm);
        
        // RÉCUPÉRATION DE TOUS LES TABLEAUX DE VALEURS (Checkbox)
        const selectedExpos = formData.getAll('expo'); 
        const selectedSols = formData.getAll('sol');
        const selectedEau = formData.getAll('eau');      // Changé en getAll
        const selectedTaille = formData.getAll('taille');  // Changé en getAll
        const selectedEntretien = formData.getAll('entretien'); // Changé en getAll

        grid.innerHTML = "";

        Object.keys(dbPlantes).forEach(id => {
            const p = dbPlantes[id];

            // 1. Recherche par nom
            const matchesSearch = p.nom.toLowerCase().includes(query);

            // 2. Logique pour choix multiples (Checkbox) :
            // Si aucune case n'est cochée, on affiche tout.
            // Si des cases sont cochées, on vérifie si la valeur de la plante est dans la liste.

            const matchesExpo = selectedExpos.length === 0 || 
                                selectedExpos.some(val => p.exi.toLowerCase().includes(val.toLowerCase()));
            
            const matchesSol = selectedSols.length === 0 || 
                               selectedSols.some(val => p.sol.toLowerCase().includes(val.toLowerCase()));
            
            const matchesEau = selectedEau.length === 0 || 
                               selectedEau.includes(p.eau);

            const matchesTaille = selectedTaille.length === 0 || 
                                  selectedTaille.includes(p.taille);

            const matchesEntretien = selectedEntretien.length === 0 || 
                                     selectedEntretien.includes(p.entretien);

            // 3. Affichage si TOUS les critères sont respectés
            if (matchesSearch && matchesExpo && matchesSol && matchesEau && matchesTaille && matchesEntretien) {
                const card = document.createElement('a');
                card.href = `plante-detail.html?id=${id}`;
                card.className = "plant-card";
                card.innerHTML = `
                    <figure>
                        <img src=${id.toLowerCase()}.jpg" alt="${p.nom}" onerror="this.src='logo1.png'">
                        <figcaption><h4>${p.nom}</h4></figcaption>
                    </figure>
                `;
                grid.appendChild(card);
            }
        });
    }

    // Initialisation des écouteurs d'événements pour le catalogue
    if (grid) {
        updateDisplay();
        if (searchInput) searchInput.addEventListener('input', updateDisplay);
        if (filterForm) {
            filterForm.addEventListener('change', updateDisplay);
            filterForm.addEventListener('reset', () => setTimeout(updateDisplay, 10));
        }
    }

    /* =========================================
       3. LOGIQUE DÉTAILS (plante-detail.html)
       ========================================= */
    const urlParams = new URLSearchParams(window.location.search);
    const plantId = urlParams.get('id');
    const plantData = dbPlantes[plantId];

    /* Vérifie si la plante existe et si on est sur la page de détails */
    if (plantData && document.getElementById('plant-name')) {
        const img = document.getElementById('plant-img');
        if (img) {
            img.src = `${plantId.toLowerCase()}.jpg`;
            img.alt = plantData.nom;
        }
        document.getElementById('plant-name').textContent = "1. Nom : " + plantData.nom;

        /* Fonction utilitaire pour remplir les listes de définitions (dt/dd) */
        const fill = (id, items) => {
            const el = document.getElementById(id);
            if (el) el.innerHTML = items.map(([k, v]) => `<dt>${k}</dt><dd>${v || 'N/A'}</dd>`).join('');
        };

        fill('list-class', [["Scientifique", plantData.sci], ["Communs", plantData.com], ["Famille", plantData.fam]]);
        fill('list-app', [["Type", plantData.type], ["Taille globale", plantData.taille_glob], ["Forme", plantData.forme], ["Aspect", plantData.aspect]]);
        fill('list-hab', [["Origine", plantData.origine], ["Sol", plantData.sol], ["Exigences", plantData.exi], ["Distribution", plantData.zone_dist]]);

        /* Génération dynamique de la section de description détaillée */
        const descBox = document.querySelector('.box-description');
        if (descBox) {
            descBox.innerHTML = `
                <h2 class="description-main-title">DESCRIPTION </h2>
                <section>
                    <h3>1. Feuilles</h3>
                    <dl>${[["Type", plantData.f_type], ["Forme", plantData.f_forme], ["Taille", plantData.f_taille], ["Couleur", plantData.f_coul], ["Disposition", plantData.f_disp]].map(([k,v])=>`<dt>${k}</dt><dd>${v}</dd>`).join('')}</dl>
                </section>
                <section>
                    <h3>2. Tiges et Branches</h3>
                    <dl>${[["Type", plantData.t_type], ["Couleur", plantData.t_coul], ["Texture", plantData.t_tex], ["Pilosité", plantData.t_poil], ["Épines", plantData.t_epi], ["Caractéristique", plantData.t_carac]].map(([k,v])=>`<dt>${k}</dt><dd>${v}</dd>`).join('')}</dl>
                </section>
                <section>
                    <h3>3. Fleurs</h3>
                    <dl>
                        <dt>Inflorescence</dt><dd>${plantData.fl_inf}</dd>
                        <dt>Taille fleur</dt><dd>${plantData.fl_taille}</dd>
                        <dt>Forme</dt><dd>${plantData.fl_forme}</dd>
                        <dt>Couleur</dt><dd>${plantData.fl_coul}</dd>
                        <dt>Odeur</dt><dd>${plantData.fl_odeur}</dd>
                        <dt>Période</dt><dd>${plantData.fl_per}</dd>
                    </dl>
                </section>
                <section>
                    <h3>4. Cycle de Vie</h3>
                    <dl>${[["Type", plantData.cyc_type], ["Longévité", plantData.cyc_vie], ["Reproduction", plantData.cyc_rep]].map(([k,v])=>`<dt>${k}</dt><dd>${v}</dd>`).join('')}</dl>
                </section>
                <section>
                    <h3>5. Autres Détails</h3>
                    <dl>${[["Particularité", plantData.det_part], ["Problèmes", plantData.det_prob]].map(([k,v])=>`<dt>${k}</dt><dd>${v}</dd>`).join('')}</dl>
                </section>
            `;
        }
    }

    /* =========================================
       4. LOGIQUE DU COMPARATEUR (POPUP)
       ========================================= */

    /* Récupère la liste des IDs stockés ou crée un tableau vide si rien n'est enregistré */
    let listeComparaison = JSON.parse(localStorage.getItem('comparateur')) || [];

    /* Écouteur pour le bouton "Comparer" présent sur la page plante-detail.html */
    const btnAjouter = document.querySelector('.compare-btn');
    if (btnAjouter && plantId) {
        btnAjouter.addEventListener('click', () => {
            /* Vérifie si la plante n'est pas déjà dans la liste pour éviter les doublons */
            if (!listeComparaison.includes(plantId)) {
                listeComparaison.push(plantId);
                /* Sauvegarde la liste mise à jour dans la mémoire locale du navigateur */
                localStorage.setItem('comparateur', JSON.stringify(listeComparaison));
                alert(plantData.nom + " a été ajouté au comparateur.");
            } else {
                alert("Cette plante est déjà présente dans votre liste de comparaison.");
            }
        });
    }

    /* Écouteur pour le bouton du menu qui ouvre la fenêtre modale de comparaison */
    const btnOuvrirPopup = document.getElementById('btn-ouvrir-comparateur');
    const modalComparateur = document.getElementById('modal-comparateur');

    if (btnOuvrirPopup) {
        btnOuvrirPopup.addEventListener('click', () => {
            /* Bloque l'ouverture si l'utilisateur n'a pas sélectionné au moins 2 plantes */
            if (listeComparaison.length < 2) {
                alert("Veuillez sélectionner au moins 2 plantes pour lancer la comparaison.");
                return;
            }

            const tableau = document.getElementById('tableau-comparaison');
            if (tableau) {
                /* Génère l'en-tête du tableau avec les noms des plantes sélectionnées */
                let html = `<thead><tr><th>CRITÈRES</th>`;
                listeComparaison.forEach(id => {
                    html += `<th>${dbPlantes[id].nom}</th>`;
                });
                html += `</tr></thead><tbody>`;

                /* Liste des critères de comparaison basés sur les données */
                const criteres = [
                    ["EXPOSITION", "exi"],
                    ["TYPE DE SOL", "sol"],
                    ["BESOINS EN EAU", "eau"],
                    ["TAILLE", "taille"],
                    ["ENTRETIEN", "entretien"]
                ];

                /* Boucle pour créer chaque ligne de comparaison par critère */
                criteres.forEach(([label, cle]) => {
                    html += `<tr><td><strong>${label}</strong></td>`;
                    listeComparaison.forEach(id => {
                        /* Affiche la valeur spécifique de la plante pour ce critère */
                        html += `<td>${dbPlantes[id][cle]}</td>`;
                    });
                    html += `</tr>`;
                });

                html += `</tbody>`;
                /* Injecte le contenu généré dans le tableau HTML */
                tableau.innerHTML = html;
                /* Affiche la fenêtre modale (popup) */
                modalComparateur.style.display = "flex";
            }
        });
    }

    /* Écouteur pour le bouton de réinitialisation qui vide la mémoire du comparateur */
    const btnReset = document.getElementById('reset-comparateur');
    if (btnReset) {
        btnReset.addEventListener('click', () => {
            /* Vide le tableau local et la mémoire du navigateur */
            listeComparaison = [];
            localStorage.removeItem('comparateur');
            /* Ferme le popup et confirme l'action à l'utilisateur */
            modalComparateur.style.display = "none";
            alert("Le comparateur a été réinitialisé avec succès.");
        });
    }

    /* Écouteur pour fermer la fenêtre de comparaison via le bouton FERMER */
    const btnFermer = document.getElementById('fermer-comparateur');
    if (btnFermer) {
        btnFermer.addEventListener('click', () => {
            modalComparateur.style.display = "none";
        });
    }

});


