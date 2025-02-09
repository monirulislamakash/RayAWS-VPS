'use client'
import { motion } from "framer-motion";

export default function Map__Section() {

    return (    
        <motion.div 
            // left to right
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="section">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62910.18980643724!2d-122.47594996660098!3d37.773911833002856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1732177734548!5m2!1sen!2sbd" width="100%" height="519" className="border-none" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </motion.div>
    )
}