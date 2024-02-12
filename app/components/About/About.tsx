import style from "./About.module.css";

export const About = () => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <h2 className={style.title}>About Us</h2>
        <div className={style.text}>
          <p className={style.subheading}>
            Welcome to <span className={style.brandName}>Paw in Hand</span>,
          </p>
          <p className={style.paragraph}>
            a community driven by our shared love for animals and the belief
            that pets enrich our lives in immeasurable ways.
          </p>
          <p className={style.paragraph}>
            Our story began with a simple passion for fostering a deeper
            connection between humans and their beloved furry companions.
          </p>
          <br />
          <p className={style.paragraph}>
            At <span className={style.brandName}>Paw in Hand</span>, we
            recognize that pets are more than just animals; they are cherished
            members of our families.
          </p>
          <p className={style.paragraph}>
            Our mission is to create a space where pet owners and enthusiasts
            alike can find valuable resources, share experiences, and celebrate
            the unique bond we share with our four-legged friends.
          </p>
          <br />
          <p className={style.paragraph}>
            Our dedicated team comprises veterinarians, animal behaviorists, and
            passionate pet advocates who are committed to providing accurate
            information and expert advice on all things related to pet care.
          </p>
          <p className={style.paragraph}>
            Whether you're a seasoned pet owner looking for advanced tips or
            someone considering bringing a new pet into your home, we're here to
            guide and support you.
          </p>
          <br />
          <p className={style.paragraph}>
            Explore our extensive collection of articles covering topics such as
            pet health, nutrition, training tips, and heartwarming stories that
            highlight the incredible relationships between pets and their
            owners.
          </p>
          <p className={style.paragraph}>
            Our community forums provide a platform for discussions, where you
            can connect with like-minded individuals, ask questions, and share
            your own insights.
          </p>
          <br />
          <p className={style.paragraph}>
            At <span className={style.brandName}>Paw in Hand</span>, we're not
            just a website; we're a community that understands the joys and
            challenges of being a pet owner.
          </p>
          <p className={style.paragraph}>
            Join us on this journey of mutual love, care, and discovery.
            Together, let's make every pawprint count!
          </p>
        </div>
      </div>
      <div className={style.content}>
        <h2>Signed by: </h2>
        <h3>Paw in Hand team</h3>
      </div>
    </div>
  );
};
