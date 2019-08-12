import React from "react";

import classes from "../../App.module.css";

export default function ym() {
  return (
    <section className={[classes.Black, classes.BoxShadow].join(" ")}>
      <a
        href="https://metrika.yandex.ru/stat/?id=53046907&amp;from=informer"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://informer.yandex.ru/informer/53046907/3_1_FFFFFFFF_FFFFFFFF_0_pageviews"
          style={{
            width: "88px",
            height: "31px",
            border: 0
          }}
          alt="Яндекс.Метрика"
          title="Яндекс.Метрика: данные за сегодня (просмотры, визиты и уникальные посетители)"
          className="ym-advanced-informer"
          data-cid="53046907"
          data-lang="ru"
        />
      </a>
    </section>
  );
}
