import "./style.css";

const Section = ({ title, body, extraHeaderContent }) => (
    <section class="section">
        <div class="section__container section__containerTasks">
            <h2 class="section__header">{title}</h2>
            {extraHeaderContent}
        </div>
        <div class="section__container">
            {body}
        </div>
    </section>
);

export default Section;