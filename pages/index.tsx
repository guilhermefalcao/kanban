import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <div className="">
        <h1>Heading (XL)</h1>
        <h2>Heading (L)</h2>
        <h3>Heading (M)</h3>
        <h4>Heading (S)</h4>
      </div>
      <div className="body-text-l">
        Body(L) - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenean sapien odio, venenatis ac sagittis eu, hendrerit a augue. In eget
        sagittis enim. Nunc tempor facilisis justo quis suscipit. Proin eget
        bibendum dui. Proin scelerisque purus quis sapien tristique, nec euismod
        neque mollis. Mauris vestibulum felis purus, vitae imperdiet metus
        tempor ac. Morbi nec purus sit amet est vulputate viverra. Sed tincidunt
        sollicitudin suscipit.
      </div>
      <div className="body-text-m">
        Body(M) - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenean sapien odio, venenatis ac sagittis eu, hendrerit a augue. In eget
        sagittis enim. Nunc tempor facilisis justo quis suscipit. Proin eget
        bibendum dui. Proin scelerisque purus quis sapien tristique, nec euismod
        neque mollis. Mauris vestibulum felis purus, vitae imperdiet metus
        tempor ac. Morbi nec purus sit amet est vulputate viverra. Sed tincidunt
        sollicitudin suscipit.
      </div>
      <div>
        <button className="btn-primary-l">Button Primary (L)</button>
        <button className="btn-primary-s">Button Primary (S)</button>
        <button className="btn-secondary-l">Button Secondary (L)</button>
        <button className="btn-secondary-s">Button Secondary (S)</button>
        <button className="btn-destructive-l">Button Destructive (L)</button>
        <button className="btn-destructive-s">Button Destructive (S)</button>
      </div>
      <input type="checkbox" className="checkbox" id="checkbox-idle" />{" "}
      <label htmlFor="checkbox-idle">Idle</label>
    </div>
  );
}
