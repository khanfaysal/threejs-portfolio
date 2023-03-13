import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
	return (
		<div
			className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
		>
			<motion.div
				variants={slideIn("left", "tween", 0.2, 1)}
				className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
			>
				<p className={styles.sectionSubText}>Get in touch</p>
				<h3 className={styles.sectionHeadText}>Contact.</h3>

				<div className='mt-12 flex flex-col gap-8'>
					<div className=''>
						<ul class='list-none'>
							<li>
								E-mail : <a className="underline" href = "mailto: mdfaysalkhancse@gmail.com">mdfaysalkhancse@gmail</a>
							</li>
							<li className="mt-2">
								Phone: +8801679599705
							</li>
							<li className="flex gap-5">
								<ul>
                  <li>
                  <a class="ml-3 text-gray-500" href="https://www.facebook.com/mdfaysal.khan.71" target="_blank">
                  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                  </a>
                  </li>
                </ul>
								<ul>
                  <li>
                  <a class="ml-3 text-gray-500" href="https://www.linkedin.com/in/faysalkhandev/" target="_blank">
                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                      <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                      <circle cx="4" cy="4" r="2" stroke="none"></circle>
                    </svg>
                  </a>
                  </li>
                </ul>
								
							</li>
						</ul>
					</div>
				</div>
			</motion.div>

			<motion.div
				variants={slideIn("right", "tween", 0.2, 1)}
				className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
			>
				<EarthCanvas />
			</motion.div>
		</div>
	);
};

export default SectionWrapper(Contact, "contact");
