import vid from "../vid.mp4";
import a11 from "../images/11.jpeg"
import a12 from "../images/12.jpeg"
import a21 from "../images/21.jpeg"
import a22 from "../images/22.jpeg"
import a23 from "../images/23.jpeg"
import a24 from "../images/24.jpeg"
import a31 from "../images/31.jpeg"
import a32 from "../images/32.jpeg"
import a41 from "../images/41.jpeg"
import a42 from "../images/42.jpeg"
import a43 from "../images/43.jpeg"
import a51 from "../images/51.jpeg"
import a52 from "../images/52.jpeg"
import a53 from "../images/53.jpeg"
import a1cover from "../images/1cover.png"
import a2cover from "../images/2cover.png"
import a3cover from "../images/3cover.png"
import a4cover from "../images/4cover.png"
import a5cover from "../images/5cover.png"

interface IProductsList{
    title:string;
    subTitle:string;
    description:string;
    coverImage?:any;
    images:string[];
    price?:string;
}
export const productsList:IProductsList[] = [
    {
        title:"Anti Itch Herbal Scalp Toner",
        subTitle:"A calming anti-itch herbal scalp toner for eczema and seborrheic dermatitis. It reduces flaking, redness, and irritation while supporting a healthy scalp barrier",
        description:"Verdera Anti-Itch Herbal Scalp Toner (Microbiome-Supportive) is a leave-on scalp treatment made for eczema-prone scalps and seborrheic dermatitis. It’s designed to calm the “hot, itchy scalp” feeling, reduce flakes, redness, and irritation, and support a healthier scalp barrier without harshness. It works by combining anti-yeast dandruff actives (Zinc Pyrithione / Piroctone Olamine) to help control the root cause of seb-derm flaking, with soothing botanicals like calendula and chamomile to ease itch and inflammation. Aloe vera, colloidal oatmeal, and licorice add hydration and a protective comfort layer, while ultra-gentle surfactants keep the scalp clean without stripping. The result is a scalp that feels calmer, less itchy, and more balanced with consistent use.",
        coverImage:a1cover,
        images:[a11,a12]
    },
    {
        title:"Sos Ointment",
        subTitle:"A microbiome-friendly probiotic SOS balm for hot, itchy eczema flare-ups. It calms fast and forms a protective barrier to lock in moisture and support healing between medical treatments (not a steroid replacement).",
        description:"Verdera SOS Ointment/Balm is a microbiome-friendly probiotic rescue balm for hot, itchy, localized eczema flare-ups. It gives fast relief with colloidal oatmeal (anti-itch) and madecassoside (Centella) (calming + repair), while probiotic ferments support a healthier microbiome to reduce flare triggers. Honey hydrates and supports healing, and zinc PCA/zinc oxide helps calm redness and strengthen the barrier. A protective base of petrolatum and sunflower seed oil forms a “bandage-like” occlusive layer that locks in moisture and shields cracked patches between medical treatments (not a steroid replacement).",
        coverImage:a2cover,
        images:[a21,a22,a23,a24]
    },
    {
        title:"Topical Microbiome Spray",
        subTitle:"A rich yet fast-absorbing Topical Microbiome Spray designed to repair the skin barrier, soothe irritation, and restore long-lasting moisture. Formulated with gentle, biomimetic lipids and calming botanical extracts suitable for sensitive, eczema-prone skin.",
        description:"Verdera Topical Microbiome Spray is a rich yet fast-absorbing barrier-repair mist made for sensitive, eczema-prone skin. It’s designed to give “instant comfort + long-term resilience” by calming irritation, restoring moisture, and reinforcing the skin barrier with biomimetic lipids and soothing botanicals. The spray delivers deep hydration and helps prevent dryness by sealing water in with a lightweight protective layer. CICA (Centella asiatica) helps calm redness and supports repair, Panthenol (B5) boosts moisture retention and soothing, Allantoin reduces sensitivity and supports healing, and Squalane replenishes skin with a skin-like lipid for soft, non-greasy comfort. Supporting barrier lipids like cholesterol, plus emollients such as jojoba esters and apricot kernel oil, keep skin smoother and less reactive over time, while sunflower seed wax and polyglycerides help lock everything in without feeling heavy.",
        coverImage:a3cover,
        images:[a31,a32]
    },
    {
        title:"Probiotic Patch",
        subTitle:"Verdera Probiotic Patch is an controlled-release patch that supports the skin microbiome, calms itch and redness, and helps strengthen the barrier on eczema-prone areas.",
        description:"Verdera Probiotic Patch is a targeted, leave-on patch designed for localized eczema-prone spots that need steady support—not harsh reapplication. It uses a controlled-release hydrogel to gradually deliver microbiome-supportive probiotic actives and/or postbiotics over up to 24 hours, helping promote a healthier skin environment and improved barrier comfort. Inside the patch, calming and barrier-repair ingredients—madecassoside (Centella) to reduce visible redness, colloidal oatmeal to soothe itch, ceramides to reinforce the barrier, and zinc PCA to support skin balance—work together while the patch creates a protected micro-environment that helps reduce dryness and friction. The result is skin that feels more comfortable, less irritated, and more supported between flare-ups.",
        coverImage:a4cover,
        images:[a41,a42,a43]
    },
    {
        title:"Verdera Kit",
        subTitle:"The Verdera Microbiome Eczema Kit is a complete 4-step routine for eczema-prone skin and scalp—designed to calm itch fast, reduce flare discomfort, and strengthen the barrier long-term using microbiome-supportive, gentle formulations.",
        description:"The Verdera Microbiome Eczema Kit is a targeted care system created specifically for people living with eczema and seborrheic dermatitis, not adapted from general skincare. Rather than focusing only on short-term symptom relief, it supports the skin on three levels: soothing flare-ups, repairing the skin barrier, and helping rebalance the microbiome for more stable, long-term comfort. The kit includes a lightweight topical microbiome spray for fast hydration and barrier support, an anti-itch herbal scalp toner to calm redness, flakes, and irritation, an SOS probiotic balm for hot, itchy patches that helps protect and support healing between treatments, and a probiotic patch that provides localized, long-wear support to reinforce the barrier. Together, Verdera offers a simple, gentle routine suitable for regular use while remaining effective for flare management and long-term skin resilience.",
        coverImage:a5cover,
        images:[a51,a52,a53]
    }
]